/**
*   @author Owen Leynes
*   @version 1.0
*
*   Programming with Vectors and modeling
*/

//Global Variables
var velocity = [];
var balls = [];
var ballCount = 1;


//Setup
function setup(){
  createCanvas(800, 800);
  velocity[0] = createVector(1, 1);
  balls[0] = new Ball(random(15, width-15), random(15, height-15), velocity[0]);
}


//Draw
function draw(){

  for(var i = 0; i < balls.length; i++){
    balls[i].drawBall();
  }

}



//Other Functions

function spawnBall(){
  velocity[ballCount] = createVector(random(-1, 1), random(-1, 1));
  balls[ballCount] = new Ball(mouseX, mouseY, velocity[ballCount]);
  ballCount++;
}









//Classes
class Ball{
  constructor(x, y, velocity){
    this.x = x;
    this.y = y;
    this.velocity = velocity;
  }

  function getX(){
    return this.x;
  }

  function getY(){
    return this.y;
  }

  function setX(x){
    this.x = x;
  }

  function setY(y){
    this.y = y;
  }

  function setVelocity(velocity){
    this.velocity = velocity;
  }

  function getVelocity(){
    return this.velocity;
  }

  function drawBall(){
    ellipse(this.x, this.y, 15, 15);
  }

  function handleCollisionBalls(balls){
    for(var i = 0; i < balls.length; i++){
      if(balls[i].getX() + 15 < this.x + 15 || balls[i].getX() - 15 < this.x - 15 ||
         balls[i].getX() + 15 < this.x - 15 || balls[i].getX() - 15 < this.x + 15){
           this.velocity.x *= -1;
      }
      if(balls[i].getY() + 15 < this.y + 15 || balls[i].getY() - 15 < this.y - 15 ||
         balls[i].getY() + 15 < this.x - 15 || balls[i].getY() - 15 < this.y + 15){
            this.velocity.y *= -1;
      }
    }
    return false;
  }

  function handleCollisionWallX(){
    if(this.x - 15 <= 0 || this.x + 15 >= width){
      this.velocity.x *= -1;
    }
  }

  function handleCollisionWallY(){
    if(this.y - 15 <= 0 || this.y + 15 >= height){
      this.velocity.y *= -1;
    }
  }

  function incrXVel(incr){
    this.velocity.x += incr;
  }

  function incrYVel(incr){
    this.velocity.y += incr;
  }

  function adjustPos(){
    this.x += this.x * this.velocity.x;
    this.y += this.y * this.velocity.y;
  }

}

class Color{
  constructor(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
  }

  function setColor(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
  }

  function getR(){
    return this.r;
  }

  function getG(){
    return this.g;
  }

  function getB(){
    return this.b;
  }

  
}
