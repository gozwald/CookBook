const button = document.getElementById("button");

function shareAlert () {
    alert("The URL of this page is: " + window.location.href);
}

button.addEventListener("click", shareAlert)

