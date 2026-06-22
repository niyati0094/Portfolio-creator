function generatePortfolio(){

    let name = document.getElementById("name").value;
    let photo = document.getElementById("photo").value;
    let about = document.getElementById("about").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let projects = document.getElementById("projects").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    document.getElementById("pName").innerText = name;
    document.getElementById("pImage").src = photo;
    document.getElementById("pAbout").innerText = about;
    document.getElementById("pEducation").innerText = education;
    document.getElementById("pSkills").innerText = skills;
    document.getElementById("pProjects").innerText = projects;
    document.getElementById("pEmail").innerText = "Email: " + email;
    document.getElementById("pPhone").innerText = "Phone: " + phone;
}