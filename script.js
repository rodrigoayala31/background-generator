var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

setGradient();
css.textContent = body.style.background + ";";


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomGradient() {
    var random1 = "#" + Math.floor(Math.random() * (1000000 - 000000) + 000000);
    var random2 = "#" + Math.floor(Math.random() * (1000000 - 000000) + 000000);
    body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);
