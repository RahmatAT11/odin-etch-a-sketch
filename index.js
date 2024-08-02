const sketchContainer = document.querySelector(".container");
let height = 16;
let width = 16;

for (let i = 0; i < height * width; i++) {
    const boxGrid = document.createElement("div");
    boxGrid.classList.add("box");
    
    sketchContainer.appendChild(boxGrid);
}