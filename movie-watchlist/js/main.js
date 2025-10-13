let movies = [];

const movieInput = document.getElementById("movie-name");
const addBtn = document.getElementById("add-movie-btn");
const movieList = document.getElementById("movie-list");

// load movies
function loadMovies() {
  const stored = localStorage.getItem("movies");
  if (stored) {
    try {
      movies = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored movies", e);
      movies = [];
    }
  }
}

// save movies
function saveMovies() {
  localStorage.setItem("movies", JSON.stringify(movies));
}

// create a unique ID
function createId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// add movies
function addMovie(title) {
  const trimmed = title && title.trim();
  if (!trimmed) return false; // nothing to add

  const movie = {
    id: createId(),
    title: trimmed,
  };

  movies.push(movie);
  saveMovies();
  displayMovies();
  return true;
}

// remove a movie
function removeMovie(id) {
  const index = movies.findIndex((m) => m.id === id);
  if (index === -1) return false;
  movies.splice(index, 1);
  saveMovies();
  displayMovies();
  return true;
}

// display the movies
function displayMovies() {
  movieList.innerHTML = "";

  if (movies.length === 0) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.textContent = "Your watchlist is empty.";
    movieList.appendChild(li);
    return;
  }

  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.className = "collection-item";

    const titleSpan = document.createElement("span");
    titleSpan.textContent = movie.title;

    const removeBtn = document.createElement("button");
    removeBtn.className = "secondary-content btn-small red lighten-1";
    removeBtn.textContent = "Watched";
    removeBtn.addEventListener("click", () => removeMovie(movie.id));

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.justifyContent = "space-between";
    container.style.alignItems = "center";

    container.appendChild(titleSpan);
    container.appendChild(removeBtn);

    li.appendChild(container);
    movieList.appendChild(li);
  });
}

// event listeners
addBtn.addEventListener("click", () => {
  if (addMovie(movieInput.value)) {
    movieInput.value = "";
    movieInput.focus();
  }
});

movieInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (addMovie(movieInput.value)) {
      movieInput.value = "";
    }
  }
});

loadMovies();
displayMovies();
