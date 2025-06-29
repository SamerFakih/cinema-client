    fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
    checkLoginStatus();
    });
    function checkLoginStatus() {
    const user = localStorage.getItem('user');
    if (user) {
    // Logged in
    document.getElementById('nav-home').style.display = 'block';
    document.getElementById('nav-movies').style.display = 'block';
    document.getElementById('nav-register').style.display = 'none';
    document.getElementById('nav-login').style.display = 'none';
    document.getElementById('nav-dash').style.display = 'block';
    document.getElementById('nav-admin').style.display = 'block';
    } else {
    // Not logged in
    document.getElementById('nav-home').style.display = 'none';
    document.getElementById('nav-movies').style.display = 'none';
    document.getElementById('nav-register').style.display = 'block';
    document.getElementById('nav-login').style.display = 'block';
    document.getElementById('nav-dash').style.display = 'none';
    document.getElementById('nav-admin').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);