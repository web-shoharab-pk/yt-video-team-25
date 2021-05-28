import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDeM8jjQln_ZGyaSay3h6IjGAWf7QAYolE",
    authDomain: "yt-video-team-25.firebaseapp.com",
    projectId: "yt-video-team-25",
    storageBucket: "yt-video-team-25.appspot.com",
    messagingSenderId: "1091152982606",
    appId: "1:1091152982606:web:00b115cd7d5df92934891f"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth()