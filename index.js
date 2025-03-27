function createGrid() {
    const grid = document.querySelector('.container');
    const width = 16;
    const height = 16;
    const cellSize = { width: 20, height: 20 };

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

createGrid();