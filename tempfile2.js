if (currentSeason === "spring" && seasonEnd(randomElement.time)) {
    createElementOnMap(randomElement.shape, clickedRow, clickedCol);
    springPoints += seasonForestPointsSpring;
    isAdjacentPoints += seasonForestPointsSpring;
    mission1.innerHTML = isAdjacentPoints;
    springP.innerHTML = springPoints;
    seasonForestPointsSpring = 0;
    console.log("Spring points: ", springPoints);
    console.log("Season forest points: ", seasonForestPointsSpring);
  } else if (currentSeason === "winter" && seasonEnd(randomElement.time)) {
    winterPoints += seasonForestPointsWinter;
    isAdjacentPoints += seasonForestPointsWinter;
    mission1.innerHTML = isAdjacentPoints;
    winterP.innerHTML = winterPoints;
  }
   else if (currentSeason === "autumn") {
    if (seasonEnd(randomElement.time)) {
      // Calculate points here
      console.log("Season will end");
    }
  } else if (currentSeason === "winter") {
    if (seasonEnd(randomElement.time)) {
      // Calculate points here
      console.log("Season will end");
    }
  }