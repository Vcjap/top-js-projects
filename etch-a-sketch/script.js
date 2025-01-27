function createGrid(gridSize) {
    for (i=0; i<gridSize; i++) {
        const divL1 = document.createElement("div");
        divL1.id = `level1-${i}`;
        divL1.className = "l1"
        for (j=0; j<gridSize; j++) {
            const divL2 = document.createElement("div");
            divL2.id = `level2-${j}`;
            divL2.className = "l2";
            divL1.appendChild(divL2);
        }
        mainDiv.appendChild(divL1);
    }
}

function getGridSize () {
    let gridSize = prompt("Enter the new grid size. Only enter numbers lower than or equal to 100!")
    while (!Number.isInteger(gridSize) || gridSize > 100) {
        gridSize = prompt("Enter the new grid size. Only enter numbers lower than or equal to 100!")
    }
    return gridSize;
}

function deleteGrid () {
    grid = document.querySelectorAll(".l1");
    grid.forEach((cell)=> {
        cell.remove();
    });
}

// Create initial grid
mainDiv = document.querySelector("#mainDiv");
const firstGridNum = 16
createGrid(firstGridNum);

// Add a class when the mouse enters the cell
cells = document.querySelectorAll(".l2");
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", ()=> {
        cell.classList.add("hoverEffect");
    })
});

// Remove the class when the mouse exits the cell
cells.forEach((cell) => {
    cell.addEventListener("mouseleave", ()=> {
        cell.classList.remove("hoverEffect");
    })
});