import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyD9HEJmF66X6Q5NR70U2dt7pFOIoQyw9ys",
   authDomain: "reactchat-5e8e9.firebaseapp.com",
   databaseURL: "https://reactchat-5e8e9.firebaseio.com",
   projectId: "reactchat-5e8e9",
   storageBucket: "reactchat-5e8e9.appspot.com",
   messagingSenderId: "888828995621"
};

firebase.initializeApp(config);

export default firebase;
