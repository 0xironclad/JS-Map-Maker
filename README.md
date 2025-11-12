# JS Map Maker

A tiny, self-contained browser "Map Mker" game written with plain HTML, CSS and JavaScript. No build step or package manager required — just open the game in your browser and play.

Quick note: running the game is just opening index.html in the browser (double-click) — no server needed.

## Run / demo
- Open index.html in your browser (double-click) or serve the folder with any static server (optional).
  - Example: Python 3: `python -m http.server 8000` then open `http://localhost:8000/`

## Features

### 🧩 Core Gameplay
- 🗺️ **11×11 Square Grid:** The game starts with a correctly drawn 11×11 map, including mountains in their proper locations. 
- 🎲 **Random Placement:** A random map element is displayed each turn, showing its associated time cost. 
- 🧱 **Tile Placement:** Players can place map elements anywhere on the grid following placement rules. 
- ⏱️ **Time System:** The game lasts 28 time units. Each placed element reduces the remaining time by its time cost. 
- 🏔️ **Mission — Borderlands:** Implements and calculates the Borderlands mission score correctly. 
- 🧮 **End-of-Game Scoring:** After 28 time units, the final score for the Borderlands mission is calculated and displayed. 

---

### 🌿 Normal Mode Features
- 🔄 **Rotation and Mirroring:** Each displayed map element can be rotated and mirrored before placement. 
- 🌳 **Additional Missions:** Includes and scores *Edge of the Forest*, *Sleepy Valley*, and *Watering Potatoes* missions. 
- 🍂 **Seasons:** The game spans four seasons, each lasting seven time units, with the active missions highlighted per season. 
- 📆 **Seasonal Scoring:** At the end of each season, scores are computed based on active missions before moving to the next season. 
- ⛰️ **Mountain Bonus:** +1 point is awarded for each fully surrounded mountain at the end of every season. 
- 🏁 **Final Score:** Displays the total score accumulated over all four seasons. 
- 🎨 **Visual Design:** Clean, well-structured, and visually appealing layout.

---

### ✨ Extra Missions Implemented
- 🪄 **Magicians’ Valley** 
- 🏗️ **Empty Site** 
- 🌾 **Odd Silos** 
- 💰 **Rich Countryside**



## Controls
- Mouse / touch: use on-screen buttons and tap/click interactive elements.
- Keyboard: common keys are supported where available — see the in-game help (or read script.js for exact bindings).

## Project structure
- README.md — this file
- index.html — game markup and asset references
- script.js — main game logic, input handling and animation/game loop
- style.css — styles and responsive layout
- assets/ — images

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

