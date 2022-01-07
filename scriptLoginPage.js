var text = document.getElementById("text");

const email = "deepaksingh@gmail.com";
const password = "webcooks123";
function formSubmit(event) {
    event.preventDefault();
    var userInputEmail = document.getElementById("email").value;
    var userInputPass = document.getElementById("password").value;
    if (userInputEmail === email) {
        text.innerHTML = "";
        if (userInputPass === password) {
            location.href = "dashboard.html";
        } else {
           
            text.innerHTML = "Inalid Details";
        }
    } else {
        text.innerHTML = "Inalid Details";
    }
}

document.getElementById("submitbtn").addEventListener("click", formSubmit);
