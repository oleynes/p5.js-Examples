//Declaring the start of code for an object:
class Circle{

  //the constructor is the arguments you put into the object when you first
  //create it
  //ex. var circlObject = new Circle(x, y, radius);
  constructor(x, y, radius){
    //the 'this' keyword takes the value from the constuctor and save it as part
    //of 'this' instance of the object. You can have theoretically infinite
    //instances of the samne object all with different (or the same) values.
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  //These functions allow you to 'get' the value of these parameters
  //or set the value. These aren't technically necessary in javascript,
  //but from what i've seen its still pretty good practice.
  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }

  setX(x){
    this.x = x;
  }

  setY(){
    this.y = y;
  }
}
