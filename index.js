
const movieListEl = document.querySelector('.movie-list');

async function renderMovies() {
  const movies = await fetch("https://www.omdbapi.com/?apikey=fe87177d&s=crazy");
  const moviesData = await movies.json();
  console.log(moviesData);

   movieListEl.innerHTML =  moviesData.Search.map(movie => ` 
  <div class="movie-card">
  <div class="movie-card__container">
    <figure>
      <img src="${movie.Poster}" alt="">
    </figure>
    <h2>${movie.Title}</h2>
    <h3>${movie.Year}</h3>
    <a href="https://imdb.com/title/.${movie.imdbID}" class="imdb" target="_blank">IMDB</a>
  </div>
</div>`).join("");
}

renderMovies();