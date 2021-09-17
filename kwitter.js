function adduser() {
    nameany= document.getElementById("username").value ;
    localStorage.setItem("username" , nameany);
    window.location= "kwitter_room.html";
}