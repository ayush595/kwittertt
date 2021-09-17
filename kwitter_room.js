
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

getname= localStorage.getItem("username") ;
document.getElementById("welcome-us").innerHTML= "welcome " + getname + "!";
function addroom() {
      roomname= document.getElementById("roomnamein").value ;
      firebase.database().ref("/").child(roomname).update({
       purpose: "adding room name"

      });
      localStorage.setItem("roomname" , roomname);
      window.location= "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
       // <div id=room_names > #room_names </div> <hr>
row= "<div id='" + room_names + "' onclick='redireting(this.id)'> #" + room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row ;
       //End code
      });});}
getData();
function redireting(name) {
      localStorage.setItem("roomname" , name);
      window.location="kwitter_page.html";

}
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location= "index.html";
}
