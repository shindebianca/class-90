
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAjZ4sErNeceApFw4dyStfub_WXiz_HWqk",
    authDomain: "kwitter-b990c.firebaseapp.com",
    databaseURL: "https://kwitter-b990c-default-rtdb.firebaseio.com",
    projectId: "kwitter-b990c",
    storageBucket: "kwitter-b990c.appspot.com",
    messagingSenderId: "373628440648",
    appId: "1:373628440648:web:168217b08896aa09e0887d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "HELLO " + user_name;

function addRoom(){

room_name =document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
    localStorage.setItem("room_name" , room_name);

    window.location="kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room_name -" , +Room_names );
        row="<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
        document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name)
localStorage.setItem("room_name", name)
window.location= "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
   window.location= "index.html";
}