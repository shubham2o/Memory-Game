// HTML DOM Element setAttribute()
// EXAMPLE
function myFunction() {
    document.getElementById("myH1").setAttribute("class", "democlass");
}


// HTML DOM Element getAttribute()
// EXAMPLE 1
const element = document.getElementById('myH2');
let text = element.getAttribute('class');
document.getElementById('demo').innerHTML = text;

// EXAMPLE 2
const myAnchor = document.getElementById('myAnchor');
let text2 = myAnchor.getAttribute('target');
document.getElementById('demo2').innerHTML = text2;

// EXAMPLE 3
function myFunction3() {
    const myButton = document.getElementById('myButton');
    const text3 = myButton.getAttribute('onclick');
    document.getElementById('demo3').innerHTML = text3;
}