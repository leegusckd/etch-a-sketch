
//Variables
let gridNumber = 16;
let colorPicker = document.querySelector('.colorPicker');
    colorPicker.addEventListener('change', function() {
        color = colorPicker.value;
    })
let color = colorPicker.value;
function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

//Grid Setup 
let grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;


//Mouse click event listeners 
let mouseDown = false;                              //mouse is not being clicked  
grid.addEventListener('mousedown', function () {    //"mouseDown = true" means that mouse is being clicked
    mouseDown=true;
})
document.addEventListener('mouseup', function() {   //The mouse is no longer being clicked
    mouseDown=false;
})



//Function for creating the Grid
function createGrid(gridNumber) {
    
    let gridSize = gridNumber * gridNumber;

    //Resets the grid everytime the function is run
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

    //Creates individual square divs within the grid
    for (let i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        //Click
        square.addEventListener('mousedown', function (){
            if (color === "rainbow") {
                square.style.backgroundColor = getRandomColor(); 
            } else {
                square.style.backgroundColor = color
            }
        });
        //Click and hold
        square.addEventListener('mouseover', function() {
            if (mouseDown === true) {
                if (color === "rainbow") {
                    square.style.backgroundColor = getRandomColor();
                } else {
                    square.style.backgroundColor = color;
                }
            }
        });
        
        grid.appendChild(square);
    }


    //Clear button
    const clearBtn = document.querySelector('.btn4');
        let squares = grid.querySelectorAll("div");
        clearBtn.addEventListener ('click', function () {
            squares.forEach((div) => (div.style.backgroundColor = "white"));
        })
    }

createGrid(gridNumber);


//Buttons

const colorBtn = document.querySelector('.btn1');
    colorBtn.addEventListener("click", function () {
        color = colorPicker.value
    })

const rainbowBtn = document.querySelector('.btn2');
    rainbowBtn.addEventListener("click", function () {
        color = "rainbow";
    })
   
    //`hsl(${Math.random() * 360}, 100%, 50%)`

const eraserBtn = document.querySelector('.btn3');
    eraserBtn.addEventListener('click', function () {
    color = "white";
})

const gridSlider = document.querySelector('.slider');
    gridSlider.addEventListener("input", function () {
    gridNumber = gridSlider.value;
    createGrid(gridNumber);
    gridSizeContent.textContent = `${gridNumber} x ${gridNumber}`;
});