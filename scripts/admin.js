function showTab(id) {
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
    }

document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById("films");
    form.addEventListener("submit", function(e){
        e.preventDefault();

    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("title",document.getElementById("title").value);
    formData.append("description",document.getElementById("description").value);
    formData.append("release_date",document.getElementById("release_date").value);
    formData.append("duration",document.getElementById("duration").value);
    formData.append("rating",document.getElementById("rating").value);
    formData.append("image",file);
    formData.append("url",document.getElementById("url").value);
    formData.append("auditorium_id",document.getElementById("auditorium_id").value);

    axios.post('http://localhost/Cinema_server/add_movie',formData,
        {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
        })
        .then(response => {
            if(response.data.status === "success") {
                console.log("Movie Added Successfully")
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