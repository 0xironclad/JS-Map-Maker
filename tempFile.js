matrix.forEach((row, y) => {
  row.forEach((cell, x) => {
    cell.addEventListener("click", () => {
      let canPlace = true;
      // finding first row and first column which has 1 from the left
      let rowOffset, colOffset;
      for (let i = 0; i < newShape.length; i++) {
        for (let j = 0; j < newShape[i].length; j++) {
          if (newShape[i][j] === 1) {
            rowOffset = i;
            colOffset = j;
            break;
          }
        }
        if (rowOffset !== undefined) break;
      }
 
      // First, check if we can place the new shape
      newShape.forEach((shapeRow, i) => {
        shapeRow.forEach((value, j) => {
          if (value === 1) {
            let placedCell = matrix[y + i - rowOffset] && matrix[y + i - rowOffset][x + j - colOffset];
            if (!placedCell || placedCell.style.backgroundImage !== baseImageUrl) {
              canPlace = false;
            }
          }
        });
      });
 
      // If we can place the new shape, then place it
      if (canPlace) {
        newShape.forEach((shapeRow, i) => {
          shapeRow.forEach((value, j) => {
            if (value === 1) {
              let placedCell = matrix[y + i - rowOffset][x + j - colOffset];
              let imageUrl;
              switch (randomElement.type) {
                case "water":
                  imageUrl = 'url("MapMakerPhotos/tiles/water_tile.png")';
                  break;
                case "town":
                  imageUrl = 'url("MapMakerPhotos/tiles/village_tile.png")';
                  break;
                case "farm":
                  imageUrl = 'url("MapMakerPhotos/tiles/plains_tile.png")';
                  break;
                case "forest":
                  imageUrl = 'url("MapMakerPhotos/tiles/forest_tile.png")';
                  break;
              }
              placedCell.style.backgroundImage = imageUrl;
            }
          });
        });
        // Update the time
        updateTimeAndScore(randomElement);
        randomElement = elements[Math.floor(Math.random() * elements.length)];
        time.innerHTML = randomElement.time;
        clear();
        createRandomShape(randomElement);
       
        console.log(totalTime);
        console.log(seasonTime);
 
      }
    });
  });
});
has context menu

y == row