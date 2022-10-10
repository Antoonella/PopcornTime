//https://www.omdbapi.com/?apikey=fe87177d&s=fast
const movieListEl = document.querySelector('.movie-list');
let searchResultEl = document.querySelector('.movie-title');
let searchEl = document.querySelector('.result');
let movies;

async function renderMovies(movie) {
  const movies = await fetch(`https://www.omdbapi.com/?apikey=fe87177d&s=${movie}`);
  const moviesData = await movies.json();
  let result = movie.toUpperCase();
  const firstSix = moviesData.Search.filter((elem) => elem).slice(0, 6);
  let moviesHTML = firstSix;
  if (filter === 'NEW_TO_OLD') {
    moviesHTML.sort((a, b) => b.Year - a.Year)
  }
  else if (filter === 'OLD_TO_NEW') {
   moviesHTML.sort((a, b) => a.Year - b.Year)
  }
  else if (filter === 'A_Z') {
   firstSix.sort((a, b) => a.Title.localeCompare(b.Title))
  }
  searchEl.innerHTML = result;

  searchEl.innerHTML = result;
  movieListEl.innerHTML = moviesHTML
    .map((movie) => {
      return ` 
      <div class="movie-card">
      <div class="movie-card__container">
        <figure>
          <img src="${movie.Poster}" alt="">
        </figure>
        <h2 class="movie-title">${movie.Title}</h2>
        <h3>${movie.Year}</h3>
        <a href="https://imdb.com/title/${movie.imdbID}" class="imdb" target="_blank">IMDB</a>
      </div>
    </div>`;
      }).join("");
  }


function onSearchChange(event) {
  movie = event.target.value;
  renderMovies(movie);
}


function filterMovies(event) {
  renderMovies(movie);
  filter = event.target.value
}
setTimeout(() => {
  renderMovies();
  
}, 3000);
 
