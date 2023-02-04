// UI:
const gridCont = document.querySelector('.grid-container');
const button = document.querySelector('.grid-changer');
const colorIndicator = document.querySelector('.color-indicator');
const erase = document.querySelector('.erase-all');


// Start grid:
createGrid(16);

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Button to prompt and get function:
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
        gridItem.addEventListener('mouseover', changeColor);
        gridItem.addEventListener('mousedown', changeColor);
        gridCont.appendChild(gridItem);
    };
};


// Change color:
function changeColor(e) {
    const color = document.getElementById('color_value').value;
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = color;
    colorIndicator.style.backgroundColor = color;
    erase.addEventListener('click', () => {
        e.target.style.backgroundColor = 'white';
    });
    
}

// Clears grid:
function clearGrid() {
    while (gridCont.firstChild) gridCont.removeChild(gridCont.firstChild);
};


















