var firebaseConfig = {
    apiKey: "AIzaSyB5Daei5EuJeuIPQ7pfxDU5z_quChmb6NM",
    authDomain: "my-amazing-app-kwitter.firebaseapp.com",
    databaseURL: "https://my-amazing-app-kwitter-default-rtdb.firebaseio.com",
    projectId: "my-amazing-app-kwitter",
    storageBucket: "my-amazing-app-kwitter.appspot.com",
    messagingSenderId: "932612517026",
    appId: "1:932612517026:web:59f69f2d533505ca7e3bfb",
    measurementId: "G-J1EY0MT2N9"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 username= localStorage.getItem("username");
 roomname= localStorage.getItem("roomname");
 function send() {
    msg= document.getElementById("msg").value ;
    firebase.database().ref(roomname).push({
 likes: 0,
 message:msg , 
 name: username

    });
    document.getElementById("msg").value= "";
 }
 function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location= "index.html";
 }
 function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
 { 
   firebase_message_id = childKey; 
   message_data = childData;
namee= message_data["name"];
message= message_data["message"];
likes= message_data["likes"];
// <h4>'name' <img id='' src=''> </h4>
part1= "<h4> " + namee + "<img id='tick_img' src='tick.png'> </h4>";
// <h4 id=writing_... > message </h4>
part2= "<h4 id='writing_'>" + message + "</h4>";
// <btn id=''firebase'' class='btn btn-warning'> 
part3= "<button id='" + firebase_message_id + "' class='btn btn-warning' value='" + likes + "' onclick='updatelikes(this.id)'>";
// <span class='glyphicon glyphicon-thumbs-up ' > like: + likes </span> </button> <hr>
part4= "<span class='glyphicon glyphicon-thumbs-up'> likes: " + likes + "</span> </button> <hr>";
row= part1 + part2 + part3 + part4;
document.getElementById("output").innerHTML += row ;

 }}); }); }
 getData();
 function updatelikes(msgid) {
    btnid= msgid;
    nooflikes= document.getElementById(btnid).value;
    newlikees= Number(nooflikes) + 1; 
    firebase.database().ref(roomname).child(msgid).update({
likes: newlikees



    });
 }