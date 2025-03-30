# PeaceBloom

## Overview

PeaceBloom is a web application designed to analyze text and predict the underlying emotion expressed. It leverages a machine learning model trained on text data to classify emotions into various categories. The application consists of a backend API built with Flask and a frontend built with React.

## Project Structure

```
PeaceBloom/
├── api/
│   ├── app.py                     # Flask API application
│   ├── emotion_classifier.h5       # Trained emotion classification model (Keras HDF5 format)
│   ├── label_encoder.pickle        # Label encoder for emotion categories (Pickle format)
│   ├── tokenizer.pickle            # Tokenizer for text preprocessing (Pickle format)
├── frontend/
│   ├── node_modules/             # Node.js dependencies
│   ├── public/                   # Static assets
│   ├── src/                      # React source code
│   ├── package-lock.json         # Dependency lock file
│   ├── package.json              # Project dependencies and scripts
│   ├── postcss.config.js         # PostCSS configuration
│   └── tailwind.config.js        # Tailwind CSS configuration
├── .gitignore                   # Specifies intentionally untracked files that Git should ignore
├── LICENSE                      # Project license
├── README.md                    # Project documentation (this file)
└── requirements.txt              # Python dependencies for the API
```

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/channpreetsingh/PeaceBloom.git](https://www.google.com/search?q=https://github.com/channpreetsingh/PeaceBloom.git)
   cd PeaceBloom
   ```

2. **Set up the backend API:**
   ```bash
   cd api
   python3 -m venv venv  # Create a virtual environment (optional but recommended)
   source venv/bin/activate  # Activate the virtual environment (Linux/macOS)
   venv\Scripts\activate  # Activate the virtual environment (Windows)
   pip install -r requirements.txt  # Install Python dependencies
   ```

3. **Set up the frontend:**
   ```bash
   cd ../frontend
   npm install  # Install Node.js dependencies
   ```

### Running the Application

1. **Start the backend API:**
   ```bash
   cd ../api
   python app.py
   ```
   The API will run on `http://127.0.0.1:5000/` by default.

2. **Start the frontend:**
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will open in your browser at `http://localhost:3000`.

## Usage

1. Open the PeaceBloom application in your browser.
2. Enter the text you want to analyze in the input field.
3. Click the "Analyze" button.
4. The application will display the predicted emotion for the given text.

## Technologies Used

- **Backend:**
  - Python
  - Flask
  - TensorFlow/Keras (for the emotion classification model)
  - scikit-learn (for label encoding and other utilities)
  - Pickle (for saving and loading model artifacts)

- **Frontend:**
  - React
  - Node.js
  - npm
  - Tailwind CSS
