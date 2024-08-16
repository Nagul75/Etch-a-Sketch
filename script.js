const colors = ["red", "pink", "orange", "blue", "white", "magenta", "violet"];

const pixels = document.getElementsByClassName('pixel');
const resolution_button = document.querySelector("#resolution-button");
const reset_button = document.querySelector("#reset-button");
const randomize_button = document.querySelector("#randomize-color-button");
const parentDiv = document.querySelector("#parent-div");

function createBoard(num=16)
{
    parentDiv.style.cssText += "margin:0;padding:0;display:flex;flex-wrap:wrap";
    const childDivWidth = "" + 960/num;
    num = num*num;
    for(let i = 0; i < num; i++)
    {
        const div = document.createElement("div");
        div.style.cssText += `height:${childDivWidth}px;width:${childDivWidth}px;margin:0;padding:0;`;
        div.style.cssText += "background: black";
        div.classList.add('pixel');
        parentDiv.appendChild(div);
    }

    for(let i = 0; i < pixels.length; i++)
    {
        pixels[i].addEventListener("mouseover", () => {
            pixels[i].style.backgroundColor = "pink";
        })
    }
}

function resetBoard()
{
    parentDiv.innerHTML = "";
    createBoard();
}

function RandomColor(){
    for(let i = 0; i < pixels.length; i++){
        const RandomColor=colors[Math.floor(Math.random()*6)];
        pixels[i].addEventListener('mouseover',() => {
            pixels[i].style.backgroundColor =RandomColor;
        });
    };
}

createBoard();

resolution_button.addEventListener("click", () => {
    let userInput;
    while(true){
    userInput= prompt('Enter Resolution desired, must be below 100.');
    userInput = parseInt(userInput,10);
    //check if number is in the range 0 to 100
        if(!isNaN(userInput) && userInput > 0 && userInput <= 100){
            break;
        }else{
            alert('Invalid input');
        }
    }
    parentDiv.innerHTML = "";
    let pixelDensity = userInput;
    createBoard(pixelDensity);
});

reset_button.addEventListener("click", resetBoard);
randomize_button.addEventListener("click", RandomColor);
