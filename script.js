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

function createElement(arr) {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 1) {
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
      }
    }
  }
}

createElement(shape);
console.log(randomElement.shape);

function rotateShape() {
  const shape = randomElement.shape;
  const size = shape.length;
  const rotatedShape = new Array(size)
    .fill(0)
    .map(() => new Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      rotatedShape[i][j] = shape[size - 1 - j][i];
    }
  }
  randomElement.shape = rotatedShape;
}

function flipShape() {
  let shape = randomElement.shape;
  let flippedShaped = shape.map((row) => row.reverse());
  randomElement.shape = flippedShaped;
}

function clearCells() {
  cells.forEach((cell) => {
    cell.style.backgroundImage = "";
  });
}

let rotateBtn = document.querySelector(".rotate");
let flipBtn = document.querySelector(".flip");
rotateBtn.addEventListener("click", () => {
  clearCells();
  rotateShape();
  createElement(randomElement.shape);
});

flipBtn.addEventListener("click", () => {
  clearCells();
  flipShape();
  createElement(randomElement.shape);
});

// !RANDOM DATA. WILL REMOVE
// *Points
const points = document.querySelectorAll(".points");
points.forEach((element) => {
  element.innerHTML = Math.floor(Math.random() * 10);
});



// *Dragging and dropping shapes on the map

let mapCells = document.querySelectorAll(".cell");
let shapeContainer = document.querySelector(".randomShape");

// Assuming shapeContainer is the container of the shape
shapeContainer.setAttribute("draggable", "true");

shapeContainer.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", JSON.stringify(randomElement));
});

mapCells.forEach((cell) => {
  cell.addEventListener("dragover", (event) => {
    event.preventDefault(); // This is necessary to allow a drop operation
  });

  cell.addEventListener("drop", (event) => {
    event.preventDefault();
    const randomElementData = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );
    const shape = randomElementData.shape;
    const cellSize = 50; // Replace with the actual size of a cell
    const dropRow = Math.floor(event.clientY / cellSize);
    const dropCol = Math.floor(event.clientX / cellSize);

    // Create the shape on the map based on the shape property of the randomElement object
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col] === 1) {
          const mapRow = dropRow + row;
          const mapCol = dropCol + col;
    
          if (randomElementData.type === "water") {
            mapCells[mapRow * 3 + mapCol].style.backgroundImage = `url("./assets/tiles/water_tile.png")`;
          } else if (randomElementData.type === "forest") {
            mapCells[mapRow * 3 + mapCol].style.backgroundImage = `url("./assets/tiles/forest_tile.png")`;
          } else if (randomElementData.type === "farm") {
            mapCells[mapRow * 3 + mapCol].style.backgroundImage = `url("./assets/tiles/plains_tile.png")`;
          } else if (randomElementData.type === "town") {
            mapCells[mapRow * 3 + mapCol].style.backgroundImage = `url("./assets/tiles/village_tile.png")`;
          }
        }
      }
    }
  });
});
