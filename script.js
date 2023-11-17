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
let adjaCentWaterPoints = 0;

// Season time units and seasons
let seasonTimeUnits = 0;
let currentSeason = "spring";
const seasons = ["spring", "summer", "autumn", "winter"];
let seasonPoints = 0;

// Season points
let springPoints = 0;
let summerPoints = 0;
let autumnPoints = 0;
let winterPoints = 0;

let timeLeft = document.querySelector(".unitsLeft");
let mission1 = document.querySelector(".edge-forest");
let mission2 = document.querySelector(".three-forest");
let mission3 = document.querySelector(".potatoes");
let mission4 = document.querySelector(".borderlands");
let currentSsnElement = document.querySelector(".current-ssn");
console.log(
  "Mission 1: ",
  mission1,
  "Mission 2: ",
  mission2,
  "Mission 3: ",
  mission3,
  "Mission 4: ",
  mission4
);

mission1.innerHTML = isAdjacentPoints;
mission2.innerHTML = threeForestPoints;
mission4.innerHTML = borderlandsPoints;
mission3.innerHTML = adjaCentWaterPoints;
currentSsnElement.innerHTML = currentSeason;

let springP = document.querySelector(".springP");
let summerP = document.querySelector(".summerP");
let autumnP = document.querySelector(".autumnP");
let winterP = document.querySelector(".winterP");

springP.innerHTML = springPoints;
summerP.innerHTML = summerPoints;
autumnP.innerHTML = autumnPoints;
winterP.innerHTML = winterPoints;

let springTimeUnits = 0;
let summerTimeUnits = 0;
let autumnTimeUnits = 0;
let winterTimeUnits = 0;
let unitsLeft = 28;
let seasonForestPointsSpring = 0; // points for when we get forest at the edges in a spring
let seasonForestPointsWinter = 0; // points for when we get forest at the edges in a winter

// Creating an element on the map
function createElementOnMap(arr, clickedRow, clickedCol) {
  let isOccupied = false;
  let isOverHang = false;
  let isStillSpring = currentSeason === "spring";
  let isStillWinter = currentSeason === "winter";
  let firstNonZeroRow = -1;
  console.log("Is still spring: ", isStillSpring);

  // Keep track of rows associated with the shape
  let shapeRows = new Set();
  let shapeCols = new Set();

  let topLeftCol = 0;
  let topLeftRow = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        topLeftCol = j;
        topLeftRow = i;
        break;
      }
    }
    if (topLeftRow !== null) {
      break;
    }
  }

  let emptyColsCount = 0;
  let emptyRowsCount = 0;

  for (let row = 0; row < arr.length; row++) {
    if (arr[row].every((el) => el === 0)) {
      emptyRowsCount++;
    }
  }

  for (let col = 0; col < arr[0].length; col++) {
    let column = arr.map((row) => row[col]);
    if (column.every((el) => el === 0)) {
      emptyColsCount++;
    }
  }

  console.log("Empty rows count: ", emptyRowsCount);
  console.log("Empty cols count: ", emptyColsCount);

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
        if (arr[row].every(el => el === 0)) {
          continue;
        }
  
        if (arr.map(r => r[col]).every(el => el === 0)) {
          continue;
        }
  
        let mapRow = clickedRow + row;
        let mapCol = clickedCol + col;
        
        if (arr[row][col] === 1) {
         
          let cell = document.querySelector(
            `.row:nth-child(${mapRow + 1}) .cell:nth-child(${mapCol + 1})`
          );

          // placing water tiles
          if (randomElement.type === "water") {
            cell.style.backgroundImage = `url("./assets/tiles/water_tile.png")`;
          } else if (randomElement.type === "forest") {
            // placing forest tiles
            cell.style.backgroundImage = `url("./assets/tiles/forest_tile.png")`;

            if (
              (mapRow === 0 ||
                mapRow === rows - 1 ||
                mapCol === 0 ||
                mapCol === cols - 1) &&
              isStillSpring
            ) {
              seasonForestPointsSpring += 1;
            } else if (
              (mapRow === 0 ||
                mapRow === rows - 1 ||
                mapCol === 0 ||
                mapCol === cols - 1) &&
              isStillWinter
            ) {
              seasonForestPointsWinter += 1;
            }
          } else if (randomElement.type === "farm") {
            // placing farm tiles
            cell.style.backgroundImage = `url("./assets/tiles/plains_tile.png")`;
          } else if (randomElement.type === "town") {
            cell.style.backgroundImage = `url("./assets/tiles/village_tile.png")`;
          }
        }
      }
    }
    unitsLeft -= randomElement.time;
    timeLeft.innerHTML = unitsLeft;
    console.log("units left: ", unitsLeft);

    timeUnits += randomElement.time; // This is the total time units for the game
    handleTime(randomElement.time); // handles time units for the season
    document.querySelector(".elapsed-time").innerHTML = seasonTimeUnits;
    randomElement = elements[Math.floor(Math.random() * elements.length)];
    clearCells();
    createElement(randomElement.shape);
    time.innerHTML = randomElement.time;
    currentSsnElement.innerHTML = currentSeason;

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
        if (currentSeason === "winter") {
          winterPoints += 6;
          winterP = winterPoints;
        } else if (currentSeason === "spring") {
          springPoints += 6;
          springP.innerHTML = springPoints;
        }
      }
    });

    // handleTime(randomElement.time); // handles time units for the season
    // document.querySelector(".elapsed-time").innerHTML = seasonTimeUnits;
    // randomElement = elements[Math.floor(Math.random() * elements.length)];
    // clearCells();
    // createElement(randomElement.shape);
    // console.log(randomElement.shape);
    // time.innerHTML = randomElement.time;

    let forestCount = 0;

    /*
    
    // We check if each column is full, if it is, we add 6 points
    shapeCols.forEach((col) => {
      if (checkColFull(col)) {
        borderlandsPoints += 6;
        mission4.innerHTML = borderlandsPoints;
        if (currentSeason === "winter") {
          winterPoints += 6;
          winterP = winterPoints;
        } else if (currentSeason === "spring") {
          springPoints += 6;
          springP.innerHTML = springPoints;
        }
      }
    });

    // If forest count in a row is 3, add 4 points

    if (forestCount === 3) {
      threeForestPoints += 4;
      if (currentSeason === "spring") {
        springPoints += 4;
      } else if (currentSeason === "summer") {
        summerPoints += 4;
      }
      document.querySelector(".three-forest").innerHTML = threeForestPoints;
    }
      */
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
console.log(
  Array.from(document.querySelectorAll(`.row .cell:nth-child(${0 + 1})`))
);

// SEASON CHANGES

function handleTime(timeUnit) {
  seasonTimeUnits += timeUnit;
  if (seasonTimeUnits >= 7) {
    changeSeason();
    seasonTimeUnits -= 7;
  }
}

function seasonEnd(timeUnit) {
  return seasonTimeUnits + timeUnit >= 7;
}

function changeSeason() {
  const currentSeasonIndex = seasons.indexOf(currentSeason);
  const nextSeasonIndex = (currentSeasonIndex + 1) % seasons.length;
  currentSeason = seasons[nextSeasonIndex];
  document.querySelector(".current-ssn").innerHTML = currentSeason;
}

// Get adjacent cells
function getAdjacentCells(row, col) {
  const top = { row: row - 1, col };
  const bottom = { row: row + 1, col };
  const left = { row, col: col - 1 };
  const right = { row, col: col + 1 };

  return { top, bottom, left, right };
}

function countRowsWithThreeTrees() {
  let rowCount = 0;
  let rows = 11;
  let cols = 11;
  for (let row = 0; row < rows; row++) {
    let forestTileCount = 0;

    for (let col = 0; col < cols; col++) {
      let cell = document.querySelector(
        `.row:nth-child(${row + 1}) .cell:nth-child(${col + 1})`
      );
      if (
        cell.style.backgroundImage === `url("./assets/tiles/forest_tile.png")`
      ) {
        forestTileCount++;
      }
    }
    if (forestTileCount === 3) {
      rowCount++;
    }
  }

  return rowCount;
}
