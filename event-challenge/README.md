# Interactive Form Challenge

Assignment for INF651: Build an interactive form that responds to click, mouse, and keyboard events.

## What it does

This challenge demonstrates handling three types of DOM events:
- **Click Event**: Submit button triggers form validation and welcome message
- **Mouse Event**: Real-time mouse coordinate tracking inside a designated area
- **Keyboard Event**: Enter key submits the form automatically

## Files

- `index.html` — Form structure and styling
- `main.js` — Event handlers for click, mouse, and keyboard interactions

## Features

### Click Event
- When "Submit" button is clicked:
  - If name is entered: displays "Welcome, [name]!" with green background
  - If name is empty: displays "Error: Please enter a name." with red background

### Mouse Event
- Tracks mouse movements inside the mouse tracker area (300x300px black box)
- Displays real-time X and Y coordinates relative to the tracker area
- Updates coordinates as you move the mouse

### Keyboard Event
- Pressing "Enter" in the input field triggers form submission
- Same validation as clicking the Submit button
- Prevents submission if input is empty

## How to run

1. Open `index.html` in your browser, or
2. Use VS Code Live Server or a simple static server:

```powershell
# from the event-challenge folder
python -m http.server 8000
# open http://localhost:8000 in your browser
```

## Usage

1. Type your name into the input field
2. Either:
   - Click the "Submit" button, or
   - Press the "Enter" key
3. See the welcome message or error message in the output div
4. Move your mouse inside the black bordered box to see coordinate tracking

## Implementation notes

### Event Handlers
- `handleSubmit()` — validates input and updates outputDiv with welcome/error message
- `submitButton.addEventListener('click', ...)` — click event handler
- `mouseTracker.addEventListener('mousemove', ...)` — mouse movement tracker
- `nameInput.addEventListener('keydown', ...)` — Enter key handler

### Validation
- Uses `trim()` to remove whitespace
- Empty input triggers error message with red background
- Valid input shows welcome message with green background

## Testing checklist

- [ ] Click "Submit" with empty input → red error message
- [ ] Click "Submit" with valid name → green welcome message
- [ ] Press "Enter" with empty input → red error message
- [ ] Press "Enter" with valid name → green welcome message
- [ ] Move mouse in tracker area → coordinates update in real-time

---

Created for INF651 Frontend Development coursework.
