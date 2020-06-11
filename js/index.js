// Your code goes here

// click - change the text on click
let h1Change = document.querySelector('body > header > div > h1')
h1Change.addEventListener('click', (e) => {
    h1Change.innerHTML = "All Your Base Are Belong To Us!!!"
})

// mouseover

// keydown
let keyPress = document.querySelector('body').addEventListener("keydown", keyFunction)

function keyFunction(){
    this.style.backgroundColor = "green";
}

// wheel
document.querySelector('body > div > header > p').addEventListener("Wheel", myFunction)
function myFunction(){
    this.style.fontSize = "35px"
}

// load
window.onload = function () {
    document.body.style.background = "lightgrey"
}

// focus
document.querySelector('body > header > div > nav > a:nth-child(1)').addEventListener("focus", foFunction)
function foFunction() {
    this.style.color = "pink"
    this.style.fontSize = "35px"
}

// resize
window.addEventListener("resize", sizeFunction)

function sizeFunction(){
    document.body.style.background = "red"
}

// mouseDown / mouseUp
let mDown = document.querySelector('body > div > header > img')
mDown.addEventListener("mousedown", downFunc);
mDown.addEventListener("mouseup", upFunc);

function downFunc() {
    document.body.style.background = "yellow";
}

function upFunc() {
    document.body.style.background = "lightgrey"
}

// focusin
document.querySelector('body > header > nav > a:nth-child(2)').addEventListener("focusin", focusinFunc)

function focusinFunc() {
    document.body.style.background = 'purple';
}