document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    axios.post('http://localhost/Cinema_server/controllers/registration_user.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      if (response.data.status === "success") {
        console.log("User registered successfully!");
        window.location.href = "../login.html";
      } else {
        console.error("Error:", response.data.message);
        alert("Error: " + response.data.message);
      }
    })
    .catch(error => {
      console.error("Axios error:", error);
      alert("Request failed");
    });
  });
});
