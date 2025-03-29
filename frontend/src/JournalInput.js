


import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from '../firebase';
// Then inside handleSubmit():
const handleSubmit = async (e) => {
e.preventDefault();
if (entry.trim()) {
try {
await addDoc(collection(db, 'journals'), {
text: entry,
createdAt: Timestamp.now(),
mood: null // placeholder
});
setSubmitted(true);
setTimeout(() => {
setSubmitted(false);
setEntry('');
}, 3000);
} catch (error) {
console.error('Error saving entry:', error);
}
}
};