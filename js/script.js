let desvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
let body = document.querySelector("body");
let arraykleur = ["#FFD700", "#E88E0C", "#D10000", "#000000", "#EFEFEF"];

desvg.setAttribute("viewbox", "0 0 500 500");
desvg.setAttribute("width", "500");
desvg.setAttribute("height", "500");
body.appendChild(desvg);

function createCircle(x, y, r, color) {
  var cirkel = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cirkel.setAttribute("cx", x);
  cirkel.setAttribute("cy", y);
  cirkel.setAttribute("r", r);
  cirkel.setAttribute("fill", color);
  return cirkel;
}

for (var i = 0; i <= 1200; i++) {
  var circleX = Math.random() * (500 - 1) + 1;
  var circleY = Math.random() * (500 - 1) + 1;
  var radius = Math.random() * (15 - 3) + 3;
  var color = arraykleur[Math.floor(Math.random() * arraykleur.length)];
  desvg.appendChild(createCircle(circleX, circleY, radius, color));
}