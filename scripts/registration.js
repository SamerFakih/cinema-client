document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fileInput = document.getElementById("government_id_image");
    const file = fileInput.files[0];

    if (!file) {
      alert("Please select a government ID image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("mobile", document.getElementById("mobile").value);
    formData.append("password", document.getElementById("password").value);
    formData.append("dob", document.getElementById("dob").value);
    formData.append("government_id_image", file);

    axios.post('http://localhost/Cinema_server/register', formData, {
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
