//  -- clear all --
// document.write("")
//let opened = window.open("");

        // clear document
// document.body.innerHTML = "";
        // create parent DOM
document.write(
    '<html><head><link rel="shortcut icon" href="https://media.flaticon.com/dist/min/img/favicon.ico"/><title>Chess Board</title></head><body><header><h1>Chess Board on JS</h1><button>Show Board</button></header></body></html>'
);

        // DOM styling
const header = document.querySelector("header");
header.style.display = "flex";
header.style.flexDirection = "column";
header.style.justifyContent = "space-around";
header.style.alignItems = "center";
header.style.borderBottom = "0.5em solid gray";
header.style.marginBottom = "2em";
header.parentNode.style.background = "#fce3ff";

const btn = document.querySelector("button");
btn.style.width = "20em";
btn.style.height = "3em";
btn.style.background = "#d2c2fd";
btn.style.borderRadius = "0.3em";
btn.style.borderColor = "#b39afd";
btn.style.cursor = "pointer";
btn.style.marginBottom = "2em";
btn.style.fontWeight = "bold";

const board = document.createElement("div");
document.body.appendChild(board);
board.style.margin = "0 auto";
board.style.width = "53.4vw";
board.style.height =  "calc(100vw*0.534)";
board.style.display = "flex";
board.style.flexWrap = "wrap";

btn.addEventListener("click", createDiv);
btn.addEventListener("click", btnActive);
board.addEventListener("click",tikTakEl);

        // timer for async function
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

        //creating a ChessBoard by immediately adding black boxes with non-displayable white boxes and smoothly bubbling it after that
async function createDiv() {
    btn.removeEventListener("click", createDiv);
    btn.textContent = "Hide & Clear"
    for (let i = 1; i <= 71; i++) {
        if (i % 9 == 0) {
            const emptyBox = document.createElement("div");
            board.appendChild(emptyBox);
        } else if (i % 2 == 0) {
            addBox("black")
        } else {addBox("white","0")
    }
        await timer(1); // adds smoothing effect
    }
            //  
    let whiteBox = document.querySelectorAll(".white")
    for (let j = k = 0; j <= 1 ; k++, j += 1/(whiteBox.length-1)) {
        whiteBox[k].style.opacity = "1";
        board.style.boxShadow = `0 0 0 ${j}em  #babdbe`;
        await timer(30);
    }
    btn.addEventListener("click", clearBoard);
}

function addBox (boxColor, opacityVal="1"){
    newDiv = document.createElement("div");
    newDiv.style.height = "11.2%";
    newDiv.style.width = "11.2%";
    newDiv.style.margin = "0.625%";
    newDiv.style.background = boxColor == "white" ? "" : boxColor;
    newDiv.style.boxShadow = "0 0 0.5em #c44ed1 ";
    newDiv.style.opacity = opacityVal;
    newDiv.transition = "all 0.8s ease 0s";
    newDiv.classList.add(boxColor);
    board.appendChild(newDiv);
}

function clearBoard() {
    btn.textContent = "Show it Again";
    board.innerHTML = "";
    board.style.boxShadow = "0 0 0 0  #babdbe";
    btn.removeEventListener("click", clearBoard);
    btn.addEventListener("click", createDiv);
}

function btnActive(event) {
    event.target.style.backgroundColor = "#0096a5";
    setTimeout(() => {
        event.target.style.backgroundColor = "#d2c2fd";
    }, 50);
}

function tikTakEl (event){
    // event.target.textContent = "X";
    alert(`target = ${this.tagName} \n color = ${ event.target.className}` );

}