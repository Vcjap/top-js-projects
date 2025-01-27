// Create grid
mainDiv = document.querySelector("#mainDiv");
for (i=0; i<16; i++) {
    const divL1 = document.createElement("div");
    divL1.id = `level1-${i}`;
    divL1.className = "l1"
    for (j=0; j<16; j++) {
        const divL2 = document.createElement("div");
        divL2.id = `level2-${j}`;
        divL2.className = "l2";
        divL1.appendChild(divL2);
    }
    mainDiv.appendChild(divL1);
}

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
