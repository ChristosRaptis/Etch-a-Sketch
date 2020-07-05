const container = document.getElementById("container");

// Number of rows/columns in the grid
let gridNum = 16;
let colorMode = "black";
// Initial grid when page loads
makeGrid(gridNum);

function makeGrid(gridNum) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    
    for (let i =1; i <= gridNum ** 2; i++) {
        let div = document.createElement("div");
        div.classList.add("box");
        div.addEventListener("mouseover", (e) => {
            switch (colorMode) {
                case "black":
                    e.target.style.backgroundColor = "black";
                    e.target.style.opacity = 1;
                    break;
                case "random":
                    e.target.style.backgroundColor = randomColor();
                    break;
                case "gradiant":
                    let opac = Number(e.target.style.opacity);
                    e.target.style.backgroundColor = "black";
                    e.target.style.opacity = opac + 0.1 ;  
                    break;
            }           
            
        })
        grid.appendChild(div)
    }
    grid.style.setProperty("--columns-rows", gridNum);
    container.appendChild(grid);
}

// generate random rgb color
function randomColor() {
    let x = Math.round(Math.random() * 255);
    let y = Math.round(Math.random() * 255);
    let z = Math.round(Math.random() * 255);
    let color = `rgb(${x}, ${y}, ${z})`;
    return color;
}
// reset grid button
const clear = document.getElementById("clear");
clear.addEventListener("click", (e) => {
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild); 
    };
    makeGrid(gridNum);
})

const random = document.getElementById("random");
random.addEventListener("click", (e) => {
    colorMode = "random";
})

const gradiant = document.getElementById("gradiant");
gradiant.addEventListener("click", (e) => {
    colorMode = "gradiant";
})
const black = document.getElementById("black");
black.addEventListener("click", (e) => {
    colorMode = "black";
})
// resize grid button
const resize = document.getElementById("resize");
resize.addEventListener("click", (e) => {
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild); 
    };
    const input = prompt("Enter the number of columns/rows: ")
    gridNum = input;   
    makeGrid(gridNum);
})