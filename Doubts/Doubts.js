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