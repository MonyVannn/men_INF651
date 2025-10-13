# Movie Watchlist

Small assignment for INF651: a real-time Movie Watchlist built with HTML, CSS (Materialize), and JavaScript.

## What it does
- Add movie titles to a watchlist.
- Display the watchlist dynamically.
- Remove movies when marked as "Watched".
- Persistent across page reloads using localStorage.

## Files
- `index.html` — app entry point and layout
- `css/styles.css` — styles (Materialize + custom)
- `js/main.js` — application logic (add/display/remove + localStorage)

## How to run
1. Open `index.html` in your browser, or
2. Use VS Code Live Server or a simple static server:

```powershell
# from the movie-watchlist folder
python -m http.server 8000
# open http://localhost:8000 in your browser
```

## Usage
1. Type a movie title into the input field.
2. Click "Add Movie" or press Enter — the movie appears in the list.
3. Click the "Watched" button to remove a movie from the list.

## Implementation notes
- `movies` array holds movie objects: { id, title }
- `addMovie(title)` validates and appends a new movie
- `displayMovies()` re-renders the list into `#movie-list`
- `removeMovie(id)` removes a movie by its id
- `loadMovies()` and `saveMovies()` handle localStorage persistence

## Possible improvements
- Add ratings, categories, or search/filter functionality
- Add confirmation before removing items
- Add unit tests for the core functions

---
Created for INF651 coursework.
