let grid = document.querySelector(".grid")
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    grid.insertAdjacentElement("beforeend", square)
}