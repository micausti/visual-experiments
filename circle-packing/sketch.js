// 8 nights of Hanukkah 2016 Examples
// Night 7: Animated Circle Packing
// Expansion of: https://youtu.be/XATr_jdh-44
// Daniel Shiffman
// http://codingrainbow.com/

/// <reference path="../TSDef/p5.global-mode.d.ts" />

// All the circles
var circles = [];

function Particle() {
  this.x = 100; 
  this.y = 100;
}

Particle.prototype.show = function() {
  point(this.x, this.y);
}

var p;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100)
  // Start with a big one in the center in the hopes that it
  // takes up a lot of a space and the sketch runs faster
  //circles.push(new Circle(width / 2, height / 2, min(width, height) / 3));
}

function draw() {
  background(150, 50, 20);
  
  // All the circles
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    c.show(6);
    
    // Is it a growing one?
    if (c.growing) {
      c.grow();
      // Does it overlap any previous circles?
      for (var j = 0; j < circles.length; j++) {
        var other = circles[j];
        if (other != c) {
          var d = dist(c.x, c.y, other.x, other.y);
          if (d - 1 < c.r + other.r) {
            c.growing = false;
          }
        }
      }
      
      // Is it stuck to an edge?
      if (c.growing) {
        c.growing = !c.edges();
      }
    }
  }
  
  // Let's try to make a certain number of new circles each frame
  // More later
  var target = 1 + constrain(floor(frameCount / 120), 0, 1000);
  // How many
  var count = 0;
  // Try N times
  for (var i = 0; i < 100; i++) {
    if (addCircle()) {
      count++;
    }
    // We made enough
    if (count == target) {
      break;
    }
  }
  
  // We can't make any more
  if (count < 1) {
    noLoop();
    console.log("finished");
  }
}

// Add one circle
function addCircle(level) {
  // Here's a new circle
  var newCircle = new Circle(random(width), random(height),1);
  // Is it in an ok spot?
  for (var i = 0; i < circles.length; i++) {
    var other = circles[i];
    var d = dist(newCircle.x, newCircle.y, other.x, other.y);
    if (d < other.r + 10) {
      newCircle = undefined;
      break;
    }
  }
  // If it is, add it
  if (newCircle) {
    circles.push(newCircle);
    if (level > 1) {
      level = level - 1;
      ;
    }
    return true;
  } else {
    return false;
  }
}

// Circle object
function Circle(x, y, r) {
  this.growing = true;
  this.x = x;
  this.y = y;
  this.r = r;
}

// Check stuck to an edge
Circle.prototype.edges = function() {
  return (this.r*4 > width - this.x || this.r*4 > this.x || this.r*4 > height - this.y || this.r*4 > this.y);
}

// Grow
Circle.prototype.grow = function() {
  this.r += 0.5;
}

// Show
Circle.prototype.show = function() {

  fill(150, 50, 20);
  strokeWeight(10);
  stroke(340, 70,48);
ellipse(this.x, this.y, this.r*2, this.r*2);
}