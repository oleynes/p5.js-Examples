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
  //If mouse is pressed AND debug is true, output current mouse coords
  //Note that when using boolean variables you don't need the == operator because
  //it is implied. if you wanted to check that debug was false you could do
  //if(!DEBUG){}    This would be read as if not DEBUG... do stuff
  if(mouseIsPressed && DEBUG){
    print("X: " + mouseX + " Y: " + mouseY);
  }


}
