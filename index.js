let sketchContainer = document.querySelector(".container");
const btnSetGrid = document.querySelector("#set-grid");

let height, width;
height = 16;
width = 16;

sketchContainer.style.height = "480px";
sketchContainer.style.width = "480px";

btnSetGrid.addEventListener("click", (e) => {
    let sizeInput;
    
    do {
        sizeInput = +prompt("Please enter number from 1-100:");
        height = sizeInput;
        width = sizeInput;
    } while (!(sizeInput < 101 && sizeInput > 0));

    document.querySelector("body").removeChild(sketchContainer);
    sketchContainer = document.createElement("div");
    sketchContainer.classList.add("container");

    sketchContainer.style.height = height * 30 + "px";
    sketchContainer.style.width = width * 30 + "px";

    setGrid(height, width);

    document.querySelector("body").appendChild(sketchContainer);
})

function setGrid(height, width) {
    for (let i = 0; i < height * width; i++) {
        const boxGrid = document.createElement("div");
        boxGrid.classList.add("box");
        boxGrid.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "red";
        })
        
        sketchContainer.appendChild(boxGrid);
    }
}

setGrid(height, width);