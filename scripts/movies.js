const slider = document.getElementById('movieGrid');

async function fetchMovies() {
    try {
    const response = await axios.get('http://localhost/Cinema_server/movie');
    console.log('Movies:', response.data);
    const movies = response.data.payload;

    if (Array.isArray(movies)) {
        movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" >
            <p>${movie.title}</p>
            <a href="#">View Details</a>
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
