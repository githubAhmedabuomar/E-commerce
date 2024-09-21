let namein = document.getElementById("namein");
let passin = document.getElementById("passin");
let emailin = document.getElementById("emailin");
let registerin = document.getElementById("registerin");

let l_user = localStorage.getItem("username");
let l_email = localStorage.getItem("useremail");
let l_pass = localStorage.getItem("userpass");

registerin.addEventListener("click", function (e) {
    e.preventDefault();
    if (namein.value === l_user && passin.value === l_pass && emailin.value === l_email) {
        window.location = "index.html"
    } else {
        alert("sorry name or  password or email is incorrect !retry")
    }
})