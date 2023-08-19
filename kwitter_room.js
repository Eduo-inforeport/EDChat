
var firebaseConfig = {
  apiKey: "AIzaSyBE7r9wQOb6lqOG4qmljYaCxlpJhJ40ibU",
  authDomain: "edchat-24363.firebaseapp.com",
  projectId: "edchat-24363",
  storageBucket: "edchat-24363.appspot.com",
  messagingSenderId: "395092395333",
  appId: "1:395092395333:web:c9ac8bd0d18362949a6a2c",
  measurementId: "G-SLL0RGWTTY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


    user_name=localStorage.getItem("user_name");
    document.getElementById("nope").innerHTML="Welcome "+user_name+"!";

    function ADDROOM() {

    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='Redirect(this.id)'>#"+Room_names+"</div>  <hr>";
       document.getElementById("output").innerHTML+=row;


      });});}
getData();

function Redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}