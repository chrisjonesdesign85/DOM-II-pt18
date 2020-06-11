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

// focusout
document.querySelector('body > header > div > nav a:nth-child(2)').addEventListener("focusout", focusoutFunc)

function focusoutFunc() {
    document.body.style.background = 'lightgrey';
}

//mouseEnter / mouse leave
mouseFoot = document.querySelector('body > footer')
document.querySelector('body > footer').addEventListener("mouseenter", mouseEnter);
document.querySelector('body > footer').addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    mouseFoot.style.background = "red"
    document.querySelector('body > footer > p').style.color = "white"
    document.querySelector('body > footer > p').style.fontSize = "35px"
}

function mouseLeave(){
    mouseFoot.style.background - "#FFEBCD"
    document.querySelector('body > footer > p').style.color = "black"
    document.querySelector('body > footer > p').style.fontSize = "16px"
}

// dblclick
document.querySelector('body > div section:nth-child(2) > div.text-content > p:nth-child(2)')
.addEventListener("dblclick", doubleClk)

function doubleClk() {
    this.innerHTML = "Converted to Binary :) 01000001 01100100 01110110 01100101 01101110 01110100 01110101 01110010 01100101 00100000 01110111 01100101 01100010 01100100 01100101 01110011 01101001 01100111 01101110 00100000 01110000 01110010 01100101 01110100 01110100 01111001 00100000 01100100 01100101 01110011 01101001 01100111 01101110 00100000 01100100 01100101 01110011 01101001 01100111 01101110 00101100 00100000 01100101 01111000 01100011 01110101 01110010 01110011 01101001 01101111 01101110 00100000 01100011 01110101 01110100 01100101 00100000 01010111 01101111 01110010 01100100 01010000 01110010 01100101 01110011 01110011 00100000 01100010 01101100 01101111 01100111 01100111 01100101 01110010 00100000 01100100 01100101 01110011 01101001 01100111 01101110 00100000 01110111 01100101 01100010 01100100 01100101 01110011 01101001 01100111 01101110 00100000 01100001 01100100 01110110 01100101 01101110 01110100 01110101 01110010 01100101 00101110 00100000 01010000 01110010 01100101 01110100 01110100 01111001 00100000 01110011 01101001 01101101 01110000 01101100 01100101 00100000 01110100 01110010 01100001 01110110 01100101 01101100 01101001 01101110 01100111 00100000 01100110 01110101 01101110 00100000 01010111 01101111 01110010 01100100 01010000 01110010 01100101 01110011 01110011 00100000 01110111 01100001 01101110 01100100 01100101 01110010 01101100 01110101 01110011 01110100 00100000 01100100 01100001 01110010 01101110 00100000 01110011 01101001 01101101 01110000 01101100 01100101 00100000 01101111 01110010 01100111 01100001 01101110 01101001 01111010 01100101 01100100 00101110"
   
}