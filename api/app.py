from flask import Flask, request, jsonify
import tensorflow as tf
import pickle
import numpy as np
from flask_cors import CORS
from tensorflow.keras.preprocessing.sequence import pad_sequences
import logging
import os

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000", "methods": ["POST"]}})

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Model and file paths
MODEL_PATH = 'emotion_classifier.h5'
TOKENIZER_PATH = 'tokenizer.pickle'
LABEL_ENCODER_PATH = 'label_encoder.pickle' 

# Load model and files at app startup
model, tokenizer, label_encoder = None, None, None
try:
    if not os.path.exists(MODEL_PATH) or not os.path.exists(TOKENIZER_PATH) or not os.path.exists(LABEL_ENCODER_PATH):
        raise FileNotFoundError("Model files not found.")

    model = tf.keras.models.load_model(MODEL_PATH)
    with open(TOKENIZER_PATH, 'rb') as handle:
        tokenizer = pickle.load(handle)
    with open(LABEL_ENCODER_PATH, 'rb') as handle:
        label_encoder = pickle.load(handle)

    logging.info("Model and tokenizer loaded successfully.")

except FileNotFoundError as e:
    logging.error(f"File loading error: {e}")
except Exception as e:
    logging.error(f"Error loading model or tokenizer: {e}", exc_info=True)

def predict_text(text, max_len=100):
    """Predicts the emotion of the given text."""
    if model is None or tokenizer is None or label_encoder is None:
        return "Model not loaded correctly"

    try:
        sequence = tokenizer.texts_to_sequences([text])
        padded_sequence = pad_sequences(sequence, maxlen=max_len, padding='post', truncating='post')
        prediction = model.predict(padded_sequence)
        predicted_class = np.argmax(prediction, axis=1)[0]
        predicted_label = label_encoder.inverse_transform([predicted_class])[0]
        return predicted_label
    except Exception as e:
        logging.error(f"Prediction error: {e}", exc_info=True)
        return f"Error in prediction: {str(e)}"

@app.route('/')
def home():
    """Returns a simple message indicating the API is running."""
    return 'Emotion Classifier API is running. Use the /predict endpoint to classify text emotions.'

@app.route('/predict', methods=['POST'])
def predict():
    """Predicts the emotion of the text provided in the request."""
    if model is None or tokenizer is None or label_encoder is None:
        return jsonify({'error': "Model not loaded correctly"}), 500

    try:
        data = request.get_json()
        if not isinstance(data, dict) or 'text' not in data:
            return jsonify({'error': 'Invalid JSON or missing text field'}), 400

        text = data['text']
        if not isinstance(text, str) or not text.strip():
            return jsonify({'error': 'Text must be a non-empty string'}), 400

        predicted_emotion = predict_text(text)
        return jsonify({'text': text, 'predicted_emotion': predicted_emotion})

    except KeyError as e:
        logging.error(f"Key error: {e}", exc_info=True)
        return jsonify({'error': 'Invalid JSON format'}), 400
    except ValueError as e:
        logging.error(f"Value error: {e}", exc_info=True)
        return jsonify({'error': 'Invalid input data'}), 400
    except TypeError as e:
        logging.error(f"Type error: {e}", exc_info=True)
        return jsonify({'error': 'Invalid request type'}), 400
    except Exception as e:
        logging.error(f"API error: {e}", exc_info=True)
        return jsonify({'error': 'An unexpected error occurred'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)