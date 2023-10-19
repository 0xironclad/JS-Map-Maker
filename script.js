let map = document.querySelector("#map");
const rows = 11;
const cols = 11;

for (let row = 0; row < rows; row++) {
    let rowElement = document.createElement("div");
    rowElement.classList.add("row");
    for (let col = 0; col < cols; col++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        rowElement.appendChild(cell);
    }
    map.appendChild(rowElement);
}

