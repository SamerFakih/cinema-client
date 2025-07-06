const slider = document.getElementById('movieSlider');

async function fetchMovies() {
    try {
      const response = await axios.get('http://localhost/Cinema_server/movie');
      console.log('Movies:', response.data);
      const movies = response.data.data
      if (Array.isArray(movies)) {
      movies.forEach(movie => {
        const movieCard = document.createElement('div');
        const base64Image = `data:image/webp;base64${movie.image}`;

        movieCard.style.minWidth = '150px';
        movieCard.innerHTML = `
          <img src="${base64Image}" alt="${movie.title}" style="width: 100%; border-radius: 5px;">
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
