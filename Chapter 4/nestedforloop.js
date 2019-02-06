/**
*   @author Owen Leynes
*   @version 1.0
*
*   Example of how nested for loops work
*   To see the console output, run the program and right click on the page
*   choose inspect and then click the tab for console. Depending on your
*   browser, this may vary, the link below will explain how to do it on all
*   the popular browsers.
*   https://www.lifewire.com/get-inspect-element-tool-for-browser-756549
*
*/


function setup(){
  //Don't need a createCanvas() or anything because we are just outputting
  //text to the console
}

function draw(){
  for(var i = 0; i < 10; i++){
    for(var j = 10; j > 0; j--){
      print("i=" + i + ", j=" + j);
    }
  }
}
