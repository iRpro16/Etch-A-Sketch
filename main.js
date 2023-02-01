// UI:
const gridCont = document.querySelector('.grid-container');
const button = document.querySelector('.grid-changer');

// Button to prompt:
button.addEventListener('click', changeGrid);

// Change grid:
function changeGrid() {
    clearGrid();
    var num = prompt('Please enter a number between 16 & 64');
    if (num >= 16 && num <= 64) {
        createGrid(num);
    } else {
        alert('Sorry, that is not a valid number!');
    }
};

// Create grid:
function createGrid(num) {
    gridCont.style.setProperty("--grid-row", num);
    gridCont.style.setProperty("--grid-column", num);
    for (i = 0; i < num*num; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridCont.appendChild(gridItem);
    };
};

// Clears grid:
function clearGrid() {
    while (gridCont.firstChild) gridCont.removeChild(gridCont.firstChild);
}















