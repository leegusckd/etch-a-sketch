
// ____________________________________________________________


// color.addEventListener('click', function() { 

// });

// rainbow.addEventListener('click', function() { 

// });



// ____________________________________________________________




//Grid Setup 

let grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";


let mouseDown = false;

grid.addEventListener('mousedown', function () {
    mouseDown=true;
}); 

document.addEventListener('mouseup', function() {
    mouseDown=false;
});

let color = "royalblue"

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', function() {
        if (mouseDown === true) {
            square.style.backgroundColor = color;
    }});
    square.addEventListener('mousedown', function (){
        square.style.backgroundColor = color;
    });
    grid.insertAdjacentElement("beforeend", square);
}

//Buttons

// const color = document.querySelector('.btn-primary');
// const rainbow = document.querySelector('.btn-danger');
// const eraser = document.querySelector('.btn-light');
// const clear = document.querySelector('.btn.btn-warning');
// const gridSize = document.querySelector('.btn-success');

let squares = grid.querySelectorAll("div");

const eraserBtn = document.querySelector('.btn3')
eraserBtn.addEventListener('click', function () {
    color = "white";
});

const clearBtn = document.querySelector('.btn4')
clearBtn.addEventListener ('click', function() {
    squares.forEach((div) => (div.style.backgroundColor = "white"))
});

// const gridSizeBtn = document.querySelector('.btn-success')
// gridSizeBtn.addEventListener('click', function() { 

// });



