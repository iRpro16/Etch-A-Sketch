const gridCont = document.querySelector('.grid-container');
const button = document.querySelector('.grid-changer');

// Button to prompt:
button.addEventListener('click', () => {
     prompt('choose a number to create grid!')
});


// Create grid:
function createGrid(row, column) {
    for (i = 0; i < row*column; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridCont.appendChild(gridItem);
    }
}

createGrid(16, 16)



