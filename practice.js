var firebaseConfig = {
    apiKey: "AIzaSyAt8dAvTsfI635EQOFe_pZIU_XzXt-akn8",
    authDomain: "practice-5a6d8.firebaseapp.com",
    databaseURL: "https://practice-5a6d8-default-rtdb.firebaseio.com",
    projectId: "practice-5a6d8",
    storageBucket: "practice-5a6d8.appspot.com",
    messagingSenderId: "689913878361",
    appId: "1:689913878361:web:4bd8f5597bcef396899e48"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        pupose : "adding user"
    });
}