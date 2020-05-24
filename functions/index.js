const functions = require('firebase-functions');

const helloWorld = functions.https.onRequest((request, response) => {
     response.send("Hello from Firebase!");
});

const randomNumber = functions.https.onRequest((request, response) => {
     const number = Math.round(Math.random() * 100);
     response.json(number.toString());
});

module.exports = {
     helloWorld,
     randomNumber
};