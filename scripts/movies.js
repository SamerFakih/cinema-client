    const slider = document.getElementById('movieGrid');

async function fetchMovies() {
    try {
        const response = await axios.get('http://localhost/Cinema_server/controllers/get_movies.php');
        console.log('Movies:', response.data);
        const movies = response.data.data
        if (Array.isArray(movies)) {
        movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.style.minWidth = '150px';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}"">
            <p style="text-align: center; margin-top: 0.5rem;">${movie.title}</p>
        `;
        slider.appendChild(movieCard);
        });
        } else {
            console.error("Expected an array of movies:", movies);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchMovies);
