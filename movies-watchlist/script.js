// Movie Watchlist - script.js
// Implements: addMovie, displayMovies, removeMovie, search, persistence

const movieInput = document.getElementById("movie-input");
const addBtn = document.getElementById("add-btn");
const movieListEl = document.getElementById("movie-list");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const categorySelect = document.getElementById("movie-category");
const ratingInput = document.getElementById("movie-rating");

// Array to hold movie objects
let watchlist = [];

// Load from localStorage if present
function loadWatchlist() {
  try {
    const raw = localStorage.getItem("watchlist");
    if (raw) {
      watchlist = JSON.parse(raw);
    } else {
      watchlist = [];
    }
  } catch (e) {
    console.error("Failed to load watchlist", e);
    watchlist = [];
  }
}

// Persist to localStorage
function saveWatchlist() {
  try {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  } catch (e) {
    console.error("Failed to save watchlist", e);
  }
}

// Add a movie to the array
function addMovie() {
  const title = movieInput.value.trim();
  const category = categorySelect.value;
  const rating = ratingInput.value.trim();
  if (!title) return;

  const movie = {
    id: Date.now().toString(),
    title,
    category: category || "Uncategorized",
    rating: rating ? Number(rating) : null,
    addedAt: new Date().toISOString(),
  };

  watchlist.push(movie);
  saveWatchlist();
  displayMovies();
  movieInput.value = "";
  ratingInput.value = "";
  categorySelect.value = "";
  movieInput.focus();
}

// Remove movie by id
function removeMovie(id) {
  watchlist = watchlist.filter((m) => m.id !== id);
  saveWatchlist();
  displayMovies();
}

// Render the list to the DOM
function displayMovies() {
  const filter = searchInput.value.trim().toLowerCase();
  movieListEl.innerHTML = "";

  const filtered = watchlist.filter(
    (m) =>
      m.title.toLowerCase().includes(filter) ||
      m.category.toLowerCase().includes(filter)
  );

  if (filtered.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }

  filtered.forEach((movie) => {
    const li = document.createElement("li");
    li.className = "movie-item";

    const title = document.createElement("div");
    title.className = "movie-title";
    title.textContent = movie.title;

    const meta = document.createElement("div");
    meta.className = "movie-meta";
    meta.textContent = `${movie.category}${
      movie.rating !== null ? " • Rating: " + movie.rating : ""
    }`;

    const actions = document.createElement("div");
    actions.className = "movie-actions";

    const watchedBtn = document.createElement("button");
    watchedBtn.className = "btn-watched";
    watchedBtn.textContent = "Watched";
    watchedBtn.onclick = () => removeMovie(movie.id);

    const editBtn = document.createElement("button");
    editBtn.className = "btn-edit";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => startEdit(movie.id);

    actions.appendChild(watchedBtn);
    actions.appendChild(editBtn);

    li.appendChild(title);
    li.appendChild(meta);
    li.appendChild(actions);

    movieListEl.appendChild(li);
  });
}

// Start editing a movie (simple inline edit)
function startEdit(id) {
  const movie = watchlist.find((m) => m.id === id);
  if (!movie) return;

  const newTitle = prompt("Edit movie title", movie.title);
  if (newTitle === null) return; // cancelled
  movie.title = newTitle.trim() || movie.title;
  saveWatchlist();
  displayMovies();
}

// Wire up events
addBtn.addEventListener("click", addMovie);
movieInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") addMovie();
});
searchInput.addEventListener("input", displayMovies);

// Initialize
loadWatchlist();
displayMovies();

// Export functions for testing (optional)
window._watchlist = {
  addMovie,
  removeMovie,
  displayMovies,
  loadWatchlist,
  saveWatchlist,
};
