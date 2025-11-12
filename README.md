# JS Map Maker

A tiny, self-contained browser "Map Mker" game written with plain HTML, CSS and JavaScript. No build step or package manager required — just open the game in your browser and play.

Quick note: running the game is just opening index.html in the browser (double-click) — no server needed.

## Run / demo
- Open index.html in your browser (double-click) or serve the folder with any static server (optional).
  - Example: Python 3: `python -m http.server 8000` then open `http://localhost:8000/`

## Features
- [x] Single-file web app (index.html + script.js + style.css)
- [x] Core "hot potato" gameplay loop
- [x] Play/pause and game over states
- [x] Basic responsive UI layout
- [x] Local assets bundled in `assets/` (also provided as `assets.7z`)


## Controls
- Mouse / touch: use on-screen buttons and tap/click interactive elements.
- Keyboard: common keys are supported where available — see the in-game help (or read script.js for exact bindings).

## Project structure
- README.md — this file
- index.html — game markup and asset references
- script.js — main game logic, input handling and animation/game loop
- style.css — styles and responsive layout
- assets/ — images, audio (also provided as `assets.7z`)

If you want to inspect behavior, open script.js — game state, input handlers and rendering loop are all in that file.

## Development notes
- No build pipeline: edit files and refresh the browser to test changes.
- Suggested refactors: split script.js into modules, add localStorage highscores, and add basic unit tests.
- If adding assets, keep file paths relative to index.html.

## Contributing
- Small fixes: open a PR with your change.
- Larger features: open an issue first to discuss design and scope.
- If you want, I can draft issues or a CONTRIBUTING.md with a suggested workflow.


## Author
0xironclad — https://github.com/0xironclad
