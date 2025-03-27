function setNewCanvas() {
    const newCanvas = document.querySelector('#new-canvas');
    newCanvas.addEventListener('click', () => {
        let isSizeValid = false;
        let size = 0;

        size = Number.parseInt(prompt('Enter the size of the new canvas (in px): '));
        isSizeValid = size <= 100 && size > 0;

        if (isSizeValid) {
            createCanvas(size, size);   
        } else {
            alert('Invalid size. Please enter a number between 1 and 100.');
        }
    });
}

function createCanvas(width, height, cellSize = { width: 10, height: 10 }) {
    const grid = document.querySelector('.container');

    if (grid.children.length > 0) {
        // for (let i = 0; i < grid.children.length; i++) {
        //     grid.removeChild(grid.children[i]);
        //     console.log('removed');
        // }
        grid.innerHTML = '';
    }

    for (let i = 0; i < width * height; i++) {
        const cell = document.createElement('div');

        cell.style.width = cellSize.width + "px";
        cell.style.height = cellSize.height + "px";
        cell.classList.toggle('cell');
        cell.id = i;

        cell.addEventListener('mouseover', () => {
            cell.classList.add('sketched');
        });

        grid.appendChild(cell);
    }

    grid.style.maxWidth = (width * cellSize.width + 2) + 'px';
    grid.style.maxHeight = 'auto';
}

createCanvas(16, 16);
setNewCanvas();