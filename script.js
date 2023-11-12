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

let randomElement = elements[Math.floor(Math.random() * elements.length)];
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
      } else {
        cells[row * 3 + col].style.display = "inline";
      }
    }
  }
}

createElement(shape);
// console.log(randomElement.shape);

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
  randomElement.rotation = (randomElement.rotation + 90) % 360;
}

function flipShape() {
  let shape = randomElement.shape;
  let flippedShaped = shape.map((row) => row.reverse());
  randomElement.shape = flippedShaped;
  randomElement.mirrored = !randomElement.mirrored;
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

// *MISSION POINTS

let mapCells = document.querySelectorAll(".cell");
let shapeContainer = document.querySelector(".randomShape");

function getShapeImageUrl(element) {
  if (element.type === "water") {
    return `url("./assets/tiles/water_tile.png")`;
  } else if (element.type === "forest") {
    return `url("./assets/tiles/forest_tile.png")`;
  } else if (element.type === "farm") {
    return `url("./assets/tiles/plains_tile.png")`;
  } else if (element.type === "town") {
    return `url("./assets/tiles/village_tile.png")`;
  }
}

function getCellCoordinates(cell) {
  const colIndex = Array.from(cell.parentElement.children).indexOf(cell);
  const rowIndex = Array.from(
    cell.parentElement.parentElement.children
  ).indexOf(cell.parentElement);
  return { row: rowIndex, col: colIndex };
}

mapCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    let coordinates = getCellCoordinates(cell);
    createElementOnMap(randomElement.shape, coordinates.row, coordinates.col);
    console.log(isAdjacentPoints);
  });
});

// !TIMER
let timeUnits = 0;
let isAdjacentPoints = 0;
let threeForestPoints = 0;
let borderlandsPoints = 0;

document.querySelector(".edge-forest").innerHTML = isAdjacentPoints;
document.querySelector(".three-forest").innerHTML = threeForestPoints;
document.querySelector(".borderlands").innerHTML = borderlandsPoints;
function createElementOnMap(arr, clickedRow, clickedCol) {
  let isOccupied = false;
  let isOverHang = false;

  // Keep track of rows associated with the shape
  let shapeRows = new Set();
  let shapeCols = new Set();

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 1) {
        let mapRow = clickedRow + row;
        let mapCol = clickedCol + col;

        if (mapRow < 0 || mapRow >= rows || mapCol < 0 || mapCol >= cols) {
          isOverHang = true;
          break;
        }

        let cell = document.querySelector(
          `.row:nth-child(${mapRow + 1}) .cell:nth-child(${mapCol + 1})`
        );
        if (cell.style.backgroundImage !== "") {
          isOccupied = true;
          break;
        }

        // Add the row to the set
        shapeRows.add(mapRow);
        shapeCols.add(mapCol);
      }
    }
  }

  if (!isOccupied && !isOverHang) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr[row].length; col++) {
        if (arr[row][col] === 1) {
          let mapRow = clickedRow + row;
          let mapCol = clickedCol + col;

          let cell = document.querySelector(
            `.row:nth-child(${mapRow + 1}) .cell:nth-child(${mapCol + 1})`
          );
          if (randomElement.type === "water") {
            cell.style.backgroundImage = `url("./assets/tiles/water_tile.png")`;
          } else if (randomElement.type === "forest") {
            cell.style.backgroundImage = `url("./assets/tiles/forest_tile.png")`;
            if (
              mapRow === 0 ||
              mapRow === rows - 1 ||
              mapCol === 0 ||
              mapCol === cols - 1
            ) {
              isAdjacentPoints += 1;
              document.querySelector(".edge-forest").innerHTML =
                isAdjacentPoints;
            }
          } else if (randomElement.type === "farm") {
            cell.style.backgroundImage = `url("./assets/tiles/plains_tile.png")`;
          } else if (randomElement.type === "town") {
            cell.style.backgroundImage = `url("./assets/tiles/village_tile.png")`;
          }
        }
      }
    }

    timeUnits += randomElement.time;
    randomElement = elements[Math.floor(Math.random() * elements.length)];
    clearCells();
    createElement(randomElement.shape);

    let forestCount = 0;
    
    // We check if each row is full, if it is, we add 6 points. Also we count the forest tiles in the row
    shapeRows.forEach((row) => {
      if (checkRowFull(row)) {
        for (let i = 0; i < cols; i++) {
          let cell = document.querySelector(
            `.row:nth-child(${row + 1}) .cell:nth-child(${i + 1})`
          );
          console.log(cell);
          if (
            cell.style.backgroundImage ===
            `url("./assets/tiles/forest_tile.png")`
          ) {
            forestCount++;
          }
        }
        borderlandsPoints += 6;
        document.querySelector(".borderlands").innerHTML = borderlandsPoints;
      }
    });

    // We check if each column is full, if it is, we add 6 points
    shapeCols.forEach((col) => {
      if (checkColFull(col)) {
        borderlandsPoints += 6;
        document.querySelector(".borderlands").innerHTML = borderlandsPoints;
      }
    });



    // If forest count in a row is 3, add 4 points


    if (forestCount === 3) {
      threeForestPoints += 4;
      document.querySelector(".three-forest").innerHTML = threeForestPoints;
    }
  } else if (isOccupied) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr[row].length; col++) {
        if (arr[row][col] === 1) {
          let mapRow = clickedRow + row;
          let mapCol = clickedCol + col;

          let cell = document.querySelector(
            `.row:nth-child(${mapRow + 1}) .cell:nth-child(${mapCol + 1})`
          );
          setTimeout(() => {
            cell.style.outline = "1px solid red";
            setTimeout(() => {
              cell.style.outline = "";
            }, 700);
          }, 100);
        }
      }
    }
  }
}

function checkIsAdjacent() {
  let isAdjacent = false;
  let forestCells = document.querySelectorAll(".cell");
  forestCells.forEach((cell) => {
    let coordinates = getCellCoordinates(cell);
    let row = coordinates.row;
    let col = coordinates.col;
    if (
      cell.style.backgroundImage === `url("./assets/tiles/forest_tile.png")`
    ) {
      if (row === 0 || row === 10 || col === 0 || col === 10) {
        isAdjacent = true;
      }
    }
  });
  return isAdjacent;
}

// ?SLEEP VALLEY

// check if row is full
function selectRow(cell) {
  let row = cell.parentElement;
  let cells = Array.from(row.children);
  return cells;
}

function checkRowFull(row) {
  let cells = Array.from(
    document.querySelectorAll(`.row:nth-child(${row + 1}) .cell`)
  );
  return cells.every((cell) => cell.style.backgroundImage !== "");
}
function checkColFull(col) {
  let cells = Array.from(
    document.querySelectorAll(`.row .cell:nth-child(${col + 1})`)
  );
  return cells.every((cell) => cell.style.backgroundImage !== "");
}
console.log(checkColFull(0));
console.log(
  Array.from(document.querySelectorAll(`.row .cell:nth-child(${0 + 1})`))
);
