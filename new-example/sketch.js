
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100)
  noStroke();
}

function draw() {
  background(150, 50, 20);

  //loop through all circlesin the array 
  
    //find out if the circle is overlapping with any previous circles, if so then stop growing

    //find out if the circle is stuck on the edge, if so then stop growing


  //draw new circles each frame 
  drawCircle(width / 2, 280, 6);

  //can't make any new circles 
}

function drawCircle(x, radius, level) {
  // 'level' is the variable that terminates the recursion once it reaches 
  // a certain value (here, 1). If a terminating condition is not 
  // specified, a recursive function keeps calling itself again and again
  // until it runs out of stack space - not a favourable outcome! 
  const tt = (126 * level) / 4.0;
  fill(tt);
  ellipse(x, height / 2, radius * 2, radius * 2);
  if (level > 1) {  
    // 'level' decreases by 1 at every step and thus makes the terminating condition
    // attainable
    level = level - 1;  
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x + radius / 2, radius / 2, level);
  }
}

// // save this file as sketch.js
// // Sketch One
// var s = function( p ) { // p could be any variable name
//   var x = 100; 
//   var y = 100;
//   p.setup = function() {
//     p.createCanvas(400, 200);
//   };

//   p.draw = function() {
//     p.background(0);
//     p.fill(255);
//     p.rect(x,y,50,50);
//   };
// };
// var myp5 = new p5(s, 'c1');

// const s = ( p ) => {

//   let x = 100; 
//   let y = 100;

//   p.setup = function() {
//     p.createCanvas(700, 410);
//   };

//   p.draw = function() {
//     p.background(0);
//     p.fill(255);
//     p.rect(x,y,50,50);
//   };
// };

// let myp5 = new p5(s); 

// // Sketch Two
// var t = function( p ) { 
//   var x = 100.0; 
//   var y = 100; 
//   var speed = 2.5; 
//   p.setup = function() {
//     p.createCanvas(400, 200);
//   };

//   p.draw = function() {
//     p.background(100);
//     p.fill(1);
//     x += speed; 
//     if(x > p.width){
//       x = 0; 
//     }
//     p.ellipse(x,y,50,50);

//   };
// };
// var myp5 = new p5(t, 'c2');