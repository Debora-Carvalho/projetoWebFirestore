const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('./projetodsw-140ae-firebase-adminsdk-u6rbe-30cbb9c1f5.json');

initializeApp({
    credential: cert(serviceAccount)
})
  

const db = getFirestore()