function createGrid(gridSize) {
    for (i=0; i<gridSize; i++) {
        const divL1 = document.createElement("div");
        divL1.id = `level1-${i}`;
        divL1.className = "l1"
        for (j=0; j<gridSize; j++) {
            const divL2 = document.createElement("div");
            divL2.id = `level2-${j}`;
            divL2.className = "l2";
            // Add mouse enter and leave hover effect
            divL2.addEventListener("mouseenter", ()=> {
                divL2.classList.add("hoverEffect");
            });
            divL2.addEventListener("mouseleave", ()=> {
                divL2.classList.remove("hoverEffect");
            });
            divL1.appendChild(divL2);
        }
        mainDiv.appendChild(divL1);
    }
}

function getGridSize () {
    let gridSize = prompt("Enter the new grid size. Only enter numbers lower than or equal to 100!")
    // while (!Number.isInteger(gridSize) || gridSize > 100) {
    //     gridSize = prompt("Enter the new grid size. Only enter numbers lower than or equal to 100!")
    // }
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

btn = document.querySelector("#createGrid");
btn.addEventListener("click", () => {
    newGridSize = getGridSize()
    deleteGrid();
    createGrid(newGridSize);
});