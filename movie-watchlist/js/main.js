// Movie Watchlist JavaScript
// Requirements: add movies to an array, display them, and remove watched movies.

// We'll keep an array of movie objects: { id, title }
let movies = [];

// DOM elements
const movieInput = document.getElementById("movie-name");
const addBtn = document.getElementById("add-movie-btn");
const movieList = document.getElementById("movie-list");

// Load movies from localStorage if available
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

// Save movies to localStorage
function saveMovies() {
  localStorage.setItem("movies", JSON.stringify(movies));
}

// Create a unique ID for a movie
function createId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// Add a movie to the array
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

// Remove a movie by id
function removeMovie(id) {
  const index = movies.findIndex((m) => m.id === id);
  if (index === -1) return false;
  movies.splice(index, 1);
  saveMovies();
  displayMovies();
  return true;
}

// Display the list of movies in the DOM
function displayMovies() {
  // Clear list
  movieList.innerHTML = "";

  if (movies.length === 0) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.textContent = "Your watchlist is empty.";
    movieList.appendChild(li);
    return;
  }

  // Create list items
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.className = "collection-item";

    const titleSpan = document.createElement("span");
    titleSpan.textContent = movie.title;

    const removeBtn = document.createElement("button");
    removeBtn.className = "secondary-content btn-small red lighten-1";
    removeBtn.textContent = "Watched";
    removeBtn.addEventListener("click", () => removeMovie(movie.id));

    // Use a container for layout
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

// Wire up add button and Enter key
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

// Initialize
loadMovies();
displayMovies();
