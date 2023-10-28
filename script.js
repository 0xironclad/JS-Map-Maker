let map = document.querySelector("#map");
const rows = 11;
const cols = 11;

//  Mountains -> (row, column) => (2,2), (4,9), (6,4), (9,10), (10,6)

const mountains = [
  [1, 1],
  [3, 8],
  [5, 3],
  [8, 9],
  [9, 5],
];

// The map with the mountains

for (let row = 0; row < rows; row++) {
  let rowElement = document.createElement("div");
  rowElement.classList.add("row");
  for (let col = 0; col < cols; col++) {
    let cell = document.createElement("div");
    for (const pair of mountains) {
      if (row === pair[0] && col === pair[1]) {
        cell.style.backgroundImage = "url(./assets/tiles/mountain_tile.png)";
      }
    }

    cell.classList.add("cell");
    rowElement.appendChild(cell);
  }
  map.appendChild(rowElement);
}

let scores = document.querySelector(".scores");
let missions = document.querySelector(".missions");
let elementsDiv = document.querySelector(".elements");

// Elements Array
const elements = [
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
];

const randomElement = elements[Math.floor(Math.random() * elements.length)];
const shape = randomElement.shape;
const cells = document.querySelectorAll(".cell-shape");
const time = document.querySelector(".time");
time.innerHTML = randomElement.time;

for (let row = 0; row < shape.length; row++) {
  for (let col = 0; col < shape[row].length; col++) {
    if (shape[row][col] === 1) {
      if (randomElement.type === "water") {
        cells[
          row * 3 + col
        ].style.backgroundImage = `url("./assets/tiles/water_tile.png")`;
      } else if (randomElement.type === "forest") {
        cells[
          row * 3 + col
        ].style.backgroundImage = `url("./assets/tiles/forest_tile.png")`;
      } else if (randomElement.type === "farm") {
        cells[
          row * 3 + col
        ].style.backgroundImage = `url("./assets/tiles/plains_tile.png")`;
      } else if (randomElement.type === "town") {
        cells[
          row * 3 + col
        ].style.backgroundImage = `url("./assets/tiles/village_tile.png")`;
      }
    } else {
      cells[row * 3 + col].style.backgroundColor = "RGB(188, 204, 200)";
    }
  }
}
