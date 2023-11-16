switch (currentSeason) {
    case "spring":
      break;
    case "summer":
      adjacentCells = Array.from(getAdjacentCells(mapRow, mapCol));
      adjacentCells.forEach((adjacentCell) => {
        if (
          mapCells[adjacentCell.top.row][adjacentCell.top.col].style
            .backgroundImage ===
          `url("./assets/tiles/plains_tile.png)`
        ) {
          summerPoints += 2;
        } else if (
          mapCells[adjacentCell.bottom.row][adjacentCell.bottom.col]
            .style.backgroundImage ===
          `url("./assets/tiles/plains_tile.png)`
        ) {
          summerPoints += 2;
        } else if (
          mapCells[adjacentCell.left.row][adjacentCell.left.col].style
            .backgroundImage ===
          `url("./assets/tiles/plains_tile.png)`
        ) {
          summerPoints += 2;
        } else if (
          mapCells[adjacentCell.right.row][adjacentCell.right.col]
            .style.backgroundImage ===
          `url("./assets/tiles/plains_tile.png)`
        ) {
          summerPoints += 2;
        }
        summerP.innerHTML = summerPoints;
      });
    case "autumn":
      adjacentCells = Array.from(getAdjacentCells(mapRow, mapCol));
      adjacentCells.forEach((adjacentCell) => {
        if (
          mapCells[adjacentCell.top.row][adjacentCell.top.col].style
            .backgroundImage ===
          `url("./assets/tiles/plains_tile.png)`
        ) {
          adjaCentWaterPoints += 2;
          autumnPoints += 2;
        } else if (
          mapCells[adjacentCell.bottom.row][adjacentCell.bottom.col]
            .style.backgroundImage ===
          `url("./assets/tiles/plains_tile.png)`
        ) {
          adjaCentWaterPoints += 2;
          autumnPoints += 2;
        } else if (
          mapCells[adjacentCell.left.row][adjacentCell.left.col].style
            .backgroundImage ===
          `url("./assets/tiles/plains_tile.png)`
        ) {
          adjaCentWaterPoints += 2;
          autumnPoints += 2;
        } else if (
          mapCells[adjacentCell.right.row][adjacentCell.right.col]
            .style.backgroundImage ===
          `url("./assets/tiles/plains_tile.png)`
        ) {
          adjaCentWaterPoints += 2;
          autumnPoints += 2;
        }
        mission3.innerHTML = adjaCentWaterPoints;
        autumnP.innerHTML = autumnPoints;
      });
    case "winter":
      shapeCols.forEach((col) => {
        if (checkColFull(col)) {
          borderlandsPoints += 6;
          winterPoints += 6;
          winterP = winterPoints;
          mission4.innerHTML = borderlandsPoints;
        }
      });
      shapeRows.forEach((row) => {
        if (checkRowFull(row)) {
          borderlandsPoints += 6;
          winterPoints += 6;
          winterP = winterPoints;
          mission4.innerHTML = borderlandsPoints;
        }
      });
      break;
    }





    
    switch (currentSeason) {
        case "spring":
          if (
            mapRow === 0 ||
            mapRow === rows - 1 ||
            mapCol === 0 ||
            mapCol === cols - 1
          ) {
            isAdjacentPoints += 1;
            mission1.innerHTML = isAdjacentPoints;
            springPoints += 1;

            springP.innerHTML = springPoints;
          }
          break;
        case "summer":
          let rowsWithThreeTrees = countRowsWithThreeTrees();
          threeForestPoints += rowsWithThreeTrees * 4;
          summerPoints += rowsWithThreeTrees * 4;
          summerP.innerHTML = summerPoints;
          mission2.innerHTML = threeForestPoints;
          break;
        case "autumn":
          let rowsWithThree = countRowsWithThreeTrees();
          
          break;
        case "winter":
          if (
            mapRow === 0 ||
            mapRow === rows - 1 ||
            mapCol === 0 ||
            mapCol === cols - 1
          ) {
            isAdjacentPoints += 1;
            mission1.innerHTML = isAdjacentPoints;
            winterPoints += 1;
            winterP = winterPoints;
          }

          // check cols and rows for fullness
          shapeCols.forEach((col) => {
            if (checkColFull(col)) {
              borderlandsPoints += 6;
              winterPoints += 6;
              winterP = winterPoints;
              mission4.innerHTML = borderlandsPoints;
            }
          });
          shapeRows.forEach((row) => {
            if (checkRowFull(row)) {
              borderlandsPoints += 6;
              winterPoints += 6;
              winterP = winterPoints;
              mission4.innerHTML = borderlandsPoints;
            }
          });
          break;
      }






      let adjacentCells = Array.from(getAdjacentCells(mapRow, mapCol));
      switch (currentSeason) {
        case "spring":
          break;
        case "summer":
          adjacentCells.forEach((adjacentCell) => {
            if (
              mapCells[adjacentCell.top.row][adjacentCell.top.col].style
                .backgroundImage ===
                `url("./assets/tiles/water_tile.png)` ||
              mapCells[adjacentCell.bottom.row][adjacentCell.bottom.col]
                .style.backgroundImage ===
                `url("./assets/tiles/water_tile.png)` ||
              mapCells[adjacentCell.left.row][adjacentCell.left.col].style
                .backgroundImage ===
                `url("./assets/tiles/water_tile.png)` ||
              mapCells[adjacentCell.right.row][adjacentCell.right.col]
                .style.backgroundImage ===
                `url("./assets/tiles/water_tile.png)`
            ) {
              summerPoints += 2;
              summerP.innerHTML = summerPoints;
              console.log("Summer points: ", summerPoints);
              adjaCentWaterPoints += 2;
              mission3.innerHTML = adjaCentWaterPoints;
            }
          });

          break;
        case "autumn":
          adjacentCells.forEach((adjacentCell) => {
            if (
              mapCells[adjacentCell.top.row][adjacentCell.top.col].style
                .backgroundImage ===
                `url("./assets/tiles/water_tile.png)` ||
              mapCells[adjacentCell.bottom.row][adjacentCell.bottom.col]
                .style.backgroundImage ===
                `url("./assets/tiles/water_tile.png)` ||
              mapCells[adjacentCell.left.row][adjacentCell.left.col].style
                .backgroundImage ===
                `url("./assets/tiles/water_tile.png)` ||
              mapCells[adjacentCell.right.row][adjacentCell.right.col]
                .style.backgroundImage ===
                `url("./assets/tiles/water_tile.png)`
            ) {
              autumnPoints += 2;
              autumnP.innerHTML = autumnPoints;
              adjaCentWaterPoints += 2;
              mission3.innerHTML = adjaCentWaterPoints;
            }
          });

          break;
        case "winter":
          shapeCols.forEach((col) => {
            if (checkColFull(col)) {
              borderlandsPoints += 6;
              winterPoints += 6;
              winterP.innerHTML = winterPoints;
              mission4.innerHTML = borderlandsPoints;
            }
          });
          shapeRows.forEach((row) => {
            if (checkRowFull(row)) {
              borderlandsPoints += 6;
              winterPoints += 6;
              winterP.innerHTML = winterPoints;
              mission4.innerHTML = borderlandsPoints;
            }
          });
          break;
      }








      if (currentSeason === "winter") {
        shapeCols.forEach((col) => {
          if (checkColFull(col)) {
            borderlandsPoints += 6;
            winterPoints += 6;
            winterP.innerHTML = winterPoints;
            mission4.innerHTML = borderlandsPoints;
          }
        });
        shapeRows.forEach((row) => {
          if (checkRowFull(row)) {
            borderlandsPoints += 6;
            winterPoints += 6;
            winterP.innerHTML = winterPoints;
            mission4.innerHTML = borderlandsPoints;
          }
        });
      }
      



      // season end forest
      springPoints += seasonForestPointsSpring;
      isAdjacentPoints += seasonForestPointsSpring;
      mission1.innerHTML = isAdjacentPoints;
      springP.innerHTML = springPoints;
      seasonForestPointsSpring = 0;
      console.log("Spring points: ", springPoints);
      console.log("Season forest points: ", seasonForestPointsSpring);