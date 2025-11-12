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

let isGameOver = false;
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

if (!isGameOver) {
  createElement(shape);
}

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
  });
});
let isOccupied = false;
let isOverHang = false;

mapCells.forEach((cell) => {
  cell.addEventListener("mousemove", () => {
    mapCells.forEach((cell) => {
      cell.classList.remove("highlight-green");
      cell.classList.remove("highlight-red");
    });

    let coordinates = getCellCoordinates(cell);
    let topLeftRow = coordinates.row;
    let topLeftCol = coordinates.col;

    for (let row = 0; row < randomElement.shape.length; row++) {
      for (let col = 0; col < randomElement.shape[row].length; col++) {
        if (randomElement.shape[row][col] === 1) {
          let mapRow = topLeftRow + row;
          let mapCol = topLeftCol + col;

          if (mapRow >= 0 && mapRow < rows && mapCol >= 0 && mapCol < cols) {
            let cell = document.querySelector(
              `.row:nth-child(${mapRow + 1}) .cell:nth-child(${mapCol + 1})`
            );
            if (cell.style.backgroundImage === "") {
              cell.classList.add("highlight-green");
            } else {
              cell.classList.add("highlight-red");
            }
          } else {
            cell.classList.add("highlight-red");
          }
        }
      }
    }
  });
});
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
let totalP = document.querySelector(".total-points");
let gameOverDiv = document.querySelector(".game-over");
let finalScore = document.querySelector(".finalScore");

// Actives
let active1 = document.querySelector(".active1");
let active2 = document.querySelector(".active2");
let active3 = document.querySelector(".active3");
let active4 = document.querySelector(".active4");
console.log("ACTIVE 1: ", active1);
console.log("ACTIVE 2: ", active2);
console.log("ACTIVE 3: ", active3);
console.log("ACTIVE 4: ", active4);

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

let springSeasonRows = new Set();
let summerSeasonRows = new Set();

let totalPoints = 0;

// Creating an element on the map
function createElementOnMap(arr, clickedRow, clickedCol) {
  if (!isGameOver) {
    let isStillSpring = currentSeason === "spring";
    let isStillWinter = currentSeason === "winter";

    // Keep track of rows associated with the shape
    let shapeRows = new Set();
    let shapeCols = new Set();

    let topLeftCol = 0;
    let topLeftRow = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 1 && j < topLeftCol) {
          topLeftCol = j;
          topLeftRow = i;
          break;
        }
      }
      if (topLeftRow !== 0) break;
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
          let mapRow = clickedRow + row + topLeftRow;
          let mapCol = clickedCol + col + topLeftCol;
          let indexOfCell = mapRow * 11 + mapCol;
          let cell = mapCells.item(indexOfCell);
          if (arr[row][col] === 1) {
            // let cell = document.querySelector(
            //   `.row:nth-child(${mapRow + 1}) .cell:nth-child(${mapCol + 1})`
            // );


            let coordinates = getCellCoordinates(cell);
            // placing water tiles
            if (randomElement.type === "water") {
              cell.style.backgroundImage = `url("./assets/tiles/water_tile.png")`;
              // !Adjacent Water Points
              let adjacentCells = getAdjacentCells(
                coordinates.row,
                coordinates.col
              );
              adjacentCells.forEach((adjacentCell) => {
                let mapCellIndex = adjacentCell.row * 11 + adjacentCell.col;

                if (
                  adjacentCell.row >= 0 &&
                  adjacentCell.col >= 0 &&
                  mapCellIndex < mapCells.length
                ) {
                  let cell = mapCells.item(mapCellIndex);
                  if (
                    cell.style.backgroundImage ===
                    `url("./assets/tiles/plains_tile.png")`
                  ) {
                    if (currentSeason === "summer") {
                      summerPoints += 2;
                      adjaCentWaterPoints += 2;
                      mission3.innerHTML = adjaCentWaterPoints;
                      console.log(
                        "ADJACENT WATER POINTS: ",
                        adjaCentWaterPoints
                      );
                    } else if (currentSeason === "autumn") {
                      autumnPoints += 2;
                      adjaCentWaterPoints += 2;
                      mission3.innerHTML = adjaCentWaterPoints;
                      console.log(
                        "ADJACENT WATER POINTS: ",
                        adjaCentWaterPoints
                      );
                    }
                  }
                }
              });
            } else if (randomElement.type === "forest") {
              cell.style.backgroundImage = `url("./assets/tiles/forest_tile.png")`;

              if (
                (mapRow === 0 ||
                  mapRow === rows - 1 ||
                  mapCol === 0 ||
                  mapCol === cols - 1) &&
                isStillSpring
              ) {
                springPoints += 1;
                isAdjacentPoints += 1;
                mission1.innerHTML = isAdjacentPoints;
              } else if (
                (mapRow === 0 ||
                  mapRow === rows - 1 ||
                  mapCol === 0 ||
                  mapCol === cols - 1) &&
                isStillWinter
              ) {
                winterPoints += 1;
                isAdjacentPoints += 1;
                mission1.innerHTML = isAdjacentPoints;
                // seasonForestPointsWinter += 1;
              }
            } else if (randomElement.type === "farm") {
              // placing farm tiles
              cell.style.backgroundImage = `url("./assets/tiles/plains_tile.png")`;
              // !Adjacent farm tiles
              let adjacentCells = getAdjacentCells(
                coordinates.row,
                coordinates.col
              );

              adjacentCells.forEach((adjacentCell) => {
                let mapCellIndex = adjacentCell.row * 11 + adjacentCell.col;

                if (
                  adjacentCell.row >= 0 &&
                  adjacentCell.col >= 0 &&
                  mapCellIndex < mapCells.length
                ) {
                  let cell = mapCells.item(mapCellIndex);
                  if (
                    cell.style.backgroundImage ===
                    `url("./assets/tiles/water_tile.png")`
                  ) {
                    if (currentSeason === "summer") {
                      summerPoints += 2;
                      adjaCentWaterPoints += 2;
                      mission3.innerHTML = adjaCentWaterPoints;
                    } else if (currentSeason === "autumn") {
                      autumnPoints += 2;
                      adjaCentWaterPoints += 2;
                      mission3.innerHTML = adjaCentWaterPoints;
                    }
                  }
                }
              });
            } else if (randomElement.type === "town") {
              cell.style.backgroundImage = `url("./assets/tiles/village_tile.png")`;
            }
            if (currentSeason === "spring") {
              shapeRows.forEach((row) => springSeasonRows.add(row));
            } else if (currentSeason === "summer") {
              shapeRows.forEach((row) => summerSeasonRows.add(row));
            }
          } else {
            continue;
          }
        }
      }
      // !BorderLand Points
      shapeCols.forEach((col) => {
        if (checkColFull(col)) {
          if (currentSeason === "winter") {
            borderlandsPoints += 6;
            mission4.innerHTML = borderlandsPoints;
            winterPoints += 6;
            winterP = winterPoints;
          } else if (currentSeason === "autumn") {
            autumnPoints += 6;
            borderlandsPoints += 6;
            mission4.innerHTML = borderlandsPoints;
          }
        }
      });

      shapeRows.forEach((row) => {
        if (checkRowFull(row)) {
          if (currentSeason === "winter") {
            borderlandsPoints += 6;
            mission4.innerHTML = borderlandsPoints;
            winterPoints += 6;
          } else if (currentSeason === "autumn") {
            autumnPoints += 6;
            borderlandsPoints += 6;
            mission4.innerHTML = borderlandsPoints;
          }
        }
      });

      unitsLeft -= randomElement.time;
      timeLeft.innerHTML = unitsLeft;

      timeUnits += randomElement.time; // This is the total time units for the game
      handleTime(randomElement.time); // handles time units for the season
      document.querySelector(".elapsed-time").innerHTML = seasonTimeUnits;
      randomElement = elements[Math.floor(Math.random() * elements.length)];

      // !Three Forest Points
      if (
        seasonTimeUnits + randomElement.time >= 7 &&
        currentSeason === "spring"
      ) {
        springSeasonRows.forEach((row) => {
          if (checkIfRowHas3Trees(row)) {
            springPoints += 4;
            threeForestPoints += 4;
            mission2.innerHTML = threeForestPoints;
          }
        });
        springSeasonRows.clear();
      } else if (
        seasonTimeUnits + randomElement.time >= 7 &&
        currentSeason === "summer"
      ) {
        summerSeasonRows.forEach((row) => {
          if (checkIfRowHas3Trees(row)) {
            summerPoints += 4;
            threeForestPoints += 4;
            mission2.innerHTML = threeForestPoints;
          }
        });
        summerSeasonRows.clear();
      }
      clearCells();
      createElement(randomElement.shape);
      time.innerHTML = randomElement.time;
      currentSsnElement.innerHTML = currentSeason;

      // !Season Points at the end of the season
      if (currentSeason === "spring") {
        springP.innerHTML = 0;
        active1.style.display = "inline-block";
        active2.style.display = "inline-block";
        active3.style.display = "none";
        active4.style.display = "none";
      } else {
        springP.innerHTML = springPoints;
      }
      if (currentSeason === "summer") {
        summerP.innerHTML = 0;
        active1.style.display = "none";

        active2.style.display = "inline-block";
        active3.style.display = "inline-block";
        active4.style.display = "none";
      } else {
        summerP.innerHTML = summerPoints;
      }
      if (currentSeason === "autumn") {
        autumnP.innerHTML = 0;
        active1.style.display = "none";
        active2.style.display = "none";
        active3.style.display = "inline-block";
        active4.style.display = "inline-block";
      } else {
        autumnP.innerHTML = autumnPoints;
      }
      if (currentSeason === "winter") {
        winterP.innerHTML = 0;
        active2.style.display = "none";
        active3.style.display = "none";
        active4.style.display = "inline-block";
        active1.style.display = "inline-block";
      } else {
        winterP.innerHTML = winterPoints;
      }
      // We check if each row is full, if it is, we add 6 points. Also we count the forest tiles in the row
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
    gameOver();
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

  totalPoints = springPoints + summerPoints + autumnPoints + winterPoints;
  totalP.innerHTML = totalPoints;
}

// Get adjacent cells
function getAdjacentCells(r, c) {
  const top = { row: r - 1, col: c };
  const bottom = { row: r + 1, col: c };
  const left = { row: r, col: c - 1 };
  const right = { row: r, col: c + 1 };

  return [top, bottom, left, right];
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

function checkIfRowHas3Trees(row) {
  let forestTileCount = 0;
  let cols = 11;
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
  return forestTileCount === 3;
}

function gameOver() {
  if (unitsLeft <= 0) {
    isGameOver = true;
    clearCells();
    unitsLeft = 0;
    gameOverDiv.style.display = "flex";
    document.querySelector(".game-overWrapper").style.display = "flex";
    document.querySelector(".game-over").style.display = "block";
    springP.innerHTML = springPoints;
    document.querySelector(".borderLandP").innerHTML = borderlandsPoints;
    document.querySelector(".sleepy").innerHTML = threeForestPoints;
    document.querySelector(".edgy").innerHTML = isAdjacentPoints;
    document.querySelector(".watering").innerHTML = adjaCentWaterPoints
    let pointsFor5Types = calculatePointsFor5Types();
    totalPoints += pointsFor5Types;
    let silosPoints = calculatePointsForOddNumberedSilo();
    let mountainPoints = checkMountainSurrounded() * 1;
    let emptyFieldsPoints = emptyFieldsAdjacentVillage();
    let mountainAdjacentWaterPoints = mountainAdjacentWater();
    totalPoints += silosPoints + mountainPoints + emptyFieldsPoints + mountainAdjacentWaterPoints;
    document.querySelector(".surrounded").innerHTML = mountainPoints;
    document.querySelector(".silos").innerHTML = silosPoints;
    document.querySelector(".empty").innerHTML = emptyFieldsPoints; 
    document.querySelector(".magician").innerHTML = mountainAdjacentWaterPoints;
    finalScore.innerHTML = totalPoints;
    document.querySelector(".richCountry").innerHTML = pointsFor5Types;
  }
}

let restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  location.reload();
});

// Row with at least the 5 different terrain types
function checkRowWith5Types() {
  let rowCount = 0;
  let rows = 11;
  let cols = 11;
  for (let row = 0; row < rows; row++) {
    let waterTileCount = 0;
    let forestTileCount = 0;
    let farmTileCount = 0;
    let townTileCount = 0;
    let plainsTileCount = 0;

    for (let col = 0; col < cols; col++) {
      let cell = document.querySelector(
        `.row:nth-child(${row + 1}) .cell:nth-child(${col + 1})`
      );
      if (
        cell.style.backgroundImage === `url("./assets/tiles/water_tile.png")`
      ) {
        waterTileCount++;
      } else if (
        cell.style.backgroundImage === `url("./assets/tiles/forest_tile.png")`
      ) {
        forestTileCount++;
      } else if (
        cell.style.backgroundImage === `url("./assets/tiles/plains_tile.png")`
      ) {
        plainsTileCount++;
      } else if (
        cell.style.backgroundImage === `url("./assets/tiles/village_tile.png")`
      ) {
        townTileCount++;
      } else if (
        cell.style.backgroundImage === `url("./assets/tiles/mountain_tile.png")`
      ) {
        farmTileCount++;
      }
    }
    if (
      waterTileCount >= 1 &&
      forestTileCount >= 1 &&
      plainsTileCount >= 1 &&
      townTileCount >= 1 &&
      farmTileCount >= 1
    ) {
      rowCount++;
    }
  }

  return rowCount;
}

// Calculating points for the row with 5 different terrain types
function calculatePointsFor5Types() {
  let rowCount = checkRowWith5Types();
  let points = rowCount * 4;
  return points;
}

// Odd Numbered Silos
// points for each odd numbered full column
function checkOddNumberedSilo() {
  let colCount = 0;
  let rows = 11;
  let cols = 11;

  for (let col = 0; col < cols; col += 2) {
    if (checkColFull(col)) {
      colCount++;
    }
  }

  return colCount;
}

// points for thw odd numbered silos
function calculatePointsForOddNumberedSilo() {
  let colCount = checkOddNumberedSilo();
  let points = colCount * 10;
  return points;
}
// Count the number of mountains on the map sorrounded on all the sides with any other terrain type

function checkMountainSurrounded() {
  let mountainCount = 0;
  let rows = 11;
  let cols = 11;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let cell = document.querySelector(
        `.row:nth-child(${row + 1}) .cell:nth-child(${col + 1})`
      );

      if (
        cell.style.backgroundImage === `url("./assets/tiles/mountain_tile.png")`
      ) {
        let adjacentCells = getAdjacentCells(row, col);

        let isSurrounded = true;

        adjacentCells.forEach((adjacentCell) => {
          if (
            adjacentCell.row >= 0 &&
            adjacentCell.col >= 0 &&
            adjacentCell.row < rows &&
            adjacentCell.col < cols
          ) {
            let mapCellIndex = adjacentCell.row * 11 + adjacentCell.col;
            let cell = mapCells.item(mapCellIndex);

            if (cell.style.backgroundImage === "") {
              isSurrounded = false;
            }
          }
        });

        if (isSurrounded) {
          mountainCount++;
        }
      }
    }
  }

  return mountainCount;
}

// For all the empty fields adjacent to village fields, we get 2 points
function emptyFieldsAdjacentVillage(){
  let fieldsCount = 0;
  let rows = 11;
  let cols = 11;
  for(let row = 0; row < rows; row++){
    for(let col = 0; col < cols; col++){
      let cell = document.querySelector(
        `.row:nth-child(${row + 1}) .cell:nth-child(${col + 1})`
      );
      if(cell.style.backgroundImage === `url("./assets/tiles/village_tile.png")`){
        let adjacentCells = getAdjacentCells(row, col);
        adjacentCells.forEach((adjacentCell) => {
          if (
            adjacentCell.row >= 0 &&
            adjacentCell.col >= 0 &&
            adjacentCell.row < rows &&
            adjacentCell.col < cols
          ) {
            let mapCellIndex = adjacentCell.row * 11 + adjacentCell.col;
            let cell = mapCells.item(mapCellIndex);

            if (cell.style.backgroundImage === "") {
              fieldsCount += 1;
            }
          }
        });
      }
    }
  }
  return fieldsCount * 2;
}

// We get 3 points for each of the mountain fields adjacent to water fields
function mountainAdjacentWater(){
  let rows = 11;
  let cols = 11;
  let mountainCount = 0;
  for(let row = 0; row < rows; row++){
    for(let col = 0; col < cols; col++){
      let cell = document.querySelector(
        `.row:nth-child(${row + 1}) .cell:nth-child(${col + 1})`
      );
      if(cell.style.backgroundImage === `url("./assets/tiles/mountain_tile.png")`){
        let adjacentCells = getAdjacentCells(row, col);
        adjacentCells.forEach((adjacentCell) => {
          if (
            adjacentCell.row >= 0 &&
            adjacentCell.col >= 0 &&
            adjacentCell.row < rows &&
            adjacentCell.col < cols
          ) {
            let mapCellIndex = adjacentCell.row * 11 + adjacentCell.col;
            let cell = mapCells.item(mapCellIndex);

            if (cell.style.backgroundImage === `url("./assets/tiles/water_tile.png")`) {
              mountainCount += 1;
            }
          }
        });
      }
    }
  }
  return mountainCount * 3;
}