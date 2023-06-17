//YOUR FIREBASE LINKS

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
  room_name= localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name1 = message_data['name'];
         message= message_data['message'];
         like= message_data['like'];
         name_with_tag= "<h4>"+ name1 +"<img class='user_tick' scr='tick.png'></h4>";
         message_with_tag= "<h4 class='message_h4'>"+ message + "</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"  onclick='updatelike(this.id)'>";
        span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";


        row= name_with_tag + message_with_tag +like_button+ span_with_tag ;
        document.getElementById("output").innerHTML+= row
//Start code

//End code
      } });  }); }
getData();

function updatelike (message_id)
{
  console.log("clicked on like button -" + message_id);
  button_id = message_id;
  likes= document.getElementById(button_id).value;
  updated_likes= Number(likes) +1;

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
  });
}

function send(){
     msg= document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
     document.getElementById("msg").value = "";
}

function logout () {
   localStorage.removeItem("user_name")
   localStorage.removeItem("room_name")
    window.location="index.html"; 
}
