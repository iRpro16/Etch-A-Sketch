const gridCont = document.querySelector('.grid-container');
const button = document.querySelector('.grid-changer');

// Button to prompt:
button.addEventListener('click', () => {
     var input = prompt('choose a number to create grid!')
});


// Create grid:
function createGrid(num) {
    gridCont.style.setProperty("--grid-row", num);
    gridCont.style.setProperty("--grid-column", num);
    for (i = 0; i < num*num; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridCont.appendChild(gridItem);
    }
}

createGrid(16);







