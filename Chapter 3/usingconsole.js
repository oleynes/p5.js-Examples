/**
*   @author Owen Leynes
*   @version  1.0
*
*   Some examples of using the console for debugging
*/
//Set this to false to disable console outputs
var DEBUG = true;

function setup(){
  //Create Canvas
  createCanvas(800, 600);
  if(DEBUG){
    print("Canvas Dimentions: width = " + width + ", height = " + height);
    print("Center: " + width/2 + ", " + height/2);
  }
  background(0);
}

function draw(){
  //If mouse is pressed and debug is true, output current mouse coords
  if(mouseIsPressed && DEBUG){
    print("X: " + mouseX + " Y: " + mouseY);
  }


}
