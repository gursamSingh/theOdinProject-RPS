const grid = document.querySelector(".grid");
const reset = document.querySelector("#reset");
const color = document.querySelector("#black");
const input = document.querySelector(".input");
const colorPicker = document.querySelector("#colorPicker");
const p = document.querySelector(".grid-size");

// default grid size is 8 
createGrid(grid, 8);

input.addEventListener("input", function () {
    gridSize = input.value;
    p.textContent = gridSize;
    removeAllChildNodes(grid);
    createGrid(grid,gridSize);
})


function createGrid(grid,gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let numDivs = gridSize * gridSize;
    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        grid.appendChild(div);
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

grid.addEventListener("mouseover", function (e) {
    if (e.target.matches('.box')) {
        e.target.classList.add("active");
    }
});

//This function is used to reset the white board.
function resetGrid() {
    let allDivs = document.querySelectorAll(".box");
    allDivs.forEach((div) => {
        div.classList.remove("active");
    }); 
}