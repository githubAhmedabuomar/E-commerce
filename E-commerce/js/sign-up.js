let nameup = document.getElementById("nameup");
let passup = document.getElementById("passup");
let emailup = document.getElementById("emailup");
let register = document.getElementById("registerup");

nameup.addEventListener("change", function () {
    localStorage.setItem("username", nameup.value)
});
passup.addEventListener("change", function () {
    localStorage.setItem("userpass", passup.value)
});
emailup.addEventListener("change", function () {
    localStorage.setItem("useremail", emailup.value)
});
register.addEventListener("click", function (e) {
    e.preventDefault();
    if (localStorage.getItem("username")) {
        window.location = "sign-in.html"
    } else {
        alert("please! fill data")
    }
});