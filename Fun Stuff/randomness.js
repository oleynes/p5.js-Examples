var r, g, b;
var centerX, centerY;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  centerX = width/2;
  centerY = height/2;
}

function draw(){
  var x = random(0, width);
  var y = random(0, height);
  line(centerX, centerY, x, y);
  ellipse(x, y, 25, 25);
  setRandomColor();
}

function setRandomColor(){
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  stroke(r, g, b);
  fill(r, g, b);
}
