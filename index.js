const sketchContainer = document.querySelector(".container");

let height = 16;
let width = 16;

sketchContainer.style.height = "480px";
sketchContainer.style.width = "480px";

for (let i = 0; i < height * width; i++) {
    const boxGrid = document.createElement("div");
    boxGrid.classList.add("box");
    boxGrid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
    })
    
    sketchContainer.appendChild(boxGrid);
}