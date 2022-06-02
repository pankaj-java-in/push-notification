import firebase from "firebase/app";
import "firebase/messaging";
import 'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js';
import 'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

export default function hello() {
    let self;
    var messagingNew ;
    if (!firebase.apps.length) {
    firebase.initializeApp({
      
    });
  }
  
  
  // // Initialize Firebase
  // //firebase.initializeApp(firebaseConfig);
  // if (!firebase.apps.length) {
  //    messagingNew = firebase.initializeApp(firebaseConfig);
  // }
  const messaging = firebase?.messaging();
  messaging.onMessage((payload) => {
    console.log('Message received.');
    console.log('Message received. ', payload.data);
    self.registration.showNotification("title",
      "body");
    // ...
  });

   return "messaging"
}