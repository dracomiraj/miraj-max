function login(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if(user == "admin" && pass == "admin"){
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Username or Password");
    }
}

function toolStart(){
    alert("Tool Started (Demo Only)");
}