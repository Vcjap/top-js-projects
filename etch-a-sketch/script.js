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