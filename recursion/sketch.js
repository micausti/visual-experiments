/// <reference path="../TSDef/p5.global-mode.d.ts" />

var colour; 
var fr;

function setup() {
    createCanvas(720, 560);
    colorMode(HSB, 360, 100, 100, 1)
    noStroke();
    //noLoop();
    fr = createDiv('');
  }
  
  function draw() {
    drawCircle(width / 2, 280, 6);
    
  }
  
  function drawCircle(x, radius, level) {
    // 'level' is the variable that terminates the recursion once it reaches 
    // a certain value (here, 1). If a terminating condition is not 
    // specified, a recursive function keeps calling itself again and again
    // until it runs out of stack space - not a favourable outcome! 
    
    const tt = (126 * level) / 4.0; 
    fill(tt);
    fr.html(tt);
    ellipse(x, height / 2, radius * 2, radius * 2);
    if (level > 1) {  
      // 'level' decreases by 1 at every step and thus makes the terminating condition
      // attainable
      level = level - 1;  
      drawCircle(x - radius / 2, radius / 2, level);
      drawCircle(x + radius / 2, radius / 2, level);

      //189
      //157.5
      //94.5

    } else {
      level = level + 1;  
      drawCircle(x - radius / 2, radius / 2, level);
      drawCircle(x + radius / 2, radius / 2, level);
    }
  }