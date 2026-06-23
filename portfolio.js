document.getElementById("name").innerHTML =
localStorage.getItem("name");

document.getElementById("photo").src =
localStorage.getItem("photo");

document.getElementById("about").innerHTML =
localStorage.getItem("about");

document.getElementById("education").innerHTML =
localStorage.getItem("education");

document.getElementById("skills").innerHTML =
localStorage.getItem("skills");

document.getElementById("projects").innerHTML =
localStorage.getItem("projects");

document.getElementById("email").innerHTML =
"Email: " + localStorage.getItem("email");

document.getElementById("phone").innerHTML =
"Phone: " + localStorage.getItem("phone");