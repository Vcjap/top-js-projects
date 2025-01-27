function createGrid(gridSize) {
    for (i=0; i<gridSize; i++) {
        const divL1 = document.createElement("div");
        divL1.id = `level1-${i}`;
        divL1.className = "l1"
        for (j=0; j<gridSize; j++) {
            const divL2 = document.createElement("div");
            divL2.id = `level2-${j}`;
            divL2.className = "l2";
            // Add hover effect
            let opacity = 0;
            divL2.addEventListener("mouseenter", ()=> {
                // Select random color
                let randomColorR = Math.floor(Math.random()*256);
                let randomColorG = Math.floor(Math.random()*256);
                let randomColorB = Math.floor(Math.random()*256);
                // Increase opacity by 0.1
                opacity = Math.min((opacity*10 + 1)/10,1);
                // Assign new color and opacity
                divL2.style.backgroundColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`;
                divL2.style.opacity = opacity;
            });
            divL1.appendChild(divL2);
        }
        mainDiv.appendChild(divL1);
    }
}

function getGridSize () {
    let gridSize = Number(prompt("Enter the new grid size. Only enter numbers lower than or equal to 100!"))
    while (!Number.isInteger(gridSize) || gridSize > 100 || gridSize <= 0) {
        alert("Invalid input! Please enter a valid integer.");
        gridSize = Number(prompt("Enter an integer less than or equal to 100:"));
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

btn = document.querySelector("#createGrid");
btn.addEventListener("click", () => {
    newGridSize = getGridSize()
    deleteGrid();
    createGrid(newGridSize);
});