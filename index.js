function createGrid() {
    const grid = document.querySelector('.container');
    const width = 16;
    const height = 16;

    for (let i = 0; i < width * height; i++) {
        const cell = document.createElement('div');
        cell.classList.toggle('cell');
        cell.id = i;

        cell.addEventListener('mouseover', () => {
            cell.classList.toggle('sketched');
        });

        grid.appendChild(cell);
    }
}

createGrid();