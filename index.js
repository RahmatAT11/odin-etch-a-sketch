const sketchContainer = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const boxGrid = document.createElement("div");
    boxGrid.classList.add("box");
    
    sketchContainer.appendChild(boxGrid);
}