document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        axios.post('http://localhost/Cinema_server/controllers/login_user.php', formData)
            .then(response => {
                console.log(response.data);
                if (response.data.status === "success") {
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                    console.log("Login successful");
                    window.location.href="../index.html"
                } else {
                    alert("Error: " + response.data.message);
                }
            })
            .catch(error => {
                console.error("Axios error:", error);
                alert("Request failed");
            });
    });
});
