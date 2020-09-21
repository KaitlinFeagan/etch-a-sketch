function gridSize(rows) {
    let grid = rows ** 2;
    return grid;
}

let nodeNumber = gridSize(30);
console.log(nodeNumber);

let container = document.querySelector('#container');

function createNode() {
    const node = document.createElement('div');
    node.classList.add('node');
    node.addEventListener('mouseenter', function(e) {
        e.target.style.background = 'black'
    });
    container.appendChild(node);

    function black() {
        node.addEventListener('mouseenter', function(e) {
            e.target.style.background = 'black'
        });
    }
    
    function color() {
        const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple', 'aqua', 'pink', 'black', 
            'violet', 'lime', 'brown'];
        node.addEventListener('mouseenter', function(e) {
            e.target.style.background = colors[Math.floor(Math.random() * colors.length)];
        });
    }
    
    function clear() {
        node.querySelector('node'); {
            node.style.background = 'white'
        }
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (button.id === 'black') {
            black();
        } else if (button.id === 'color') {
            color();
        } else if (button.id === 'clear') {
            clear();
        } else {
            return;
        }
    })});
}

function createGrid() {
    for(x=0; x<nodeNumber; x++) {
        createNode();
    }
}

createGrid();