
import firebase from "firebase/app";
import "firebase/messaging";
import 'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js';
import 'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js';
import Swd from "./firebase-messaging-sw";

export default function App() {
   Swd();
  // Initialize Firebase Cloud Messaging and get a reference to the service
  let self;
  const messaging = firebase?.messaging();
  messaging?.getToken({ vapidKey: '' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
  
  
  
//     
// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });


  return (
    <>hello india
    </>
  )
  }
  

 