/// <reference path="../TSDef/p5.global-mode.d.ts" />

var ball = {
    x: 300,
    y: 200,
    xspeed: 4, 
    yspeed: -3 

}

function setup(){
    colorMode(HSB, 360, 100, 100, 1)
    createCanvas(900, 900);

}

function draw() {
    background(0);
    strokeWeight(.25);
    stroke(255);
    circleLoop();

}

function circleLoop() {
    
    for (var x = 0; x <= width+150; x += 10) {
       for (var y = 0; y <= height+200; y += 20) {
        fill(random(255), random(10), random(100));
        //fill(random(255), random(10), random(100));

        //horizontal arcs
        // arc(x, 0, 280, 380, 0, PI);
        // arc(x, 400, 280, 380, PI, TWO_PI);
        // arc(x, 400, 280, 380, 0, PI);
        // arc(x, 800, 280, 380, PI, TWO_PI);

        //vertical arcs
        arc(-50, y, 280, 580, PI, TWO_PI);
        arc(250, y, 280, 580, PI, TWO_PI);
        arc(550, y, 280, 580, PI, TWO_PI);
        arc(850, y, 280, 580, PI, TWO_PI);

        //dancing grid
        //arc(x, y, 280, 580, TWO_PI, PI);

        //dancing tiny arcs
        //arc(x, y, 10, 100, PI, TWO_PI);


       // arc(x, y, 100, 1000, PI, TWO_PI);

        //rec with straight sides
        //rect(x, y, 28, 58);

        //dancing fabric
        //arc(x, y, 280, 580, PI, TWO_PI);
        }
    }

        //noLoop();
}

    function display() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(ball.x, ball.y, 24, 24)
    }

function bounce(){
    if (ball.x > width || ball.x < 0) {
        ball.xspeed = ball.xspeed * -1;
    }

    if (ball.y > height || ball.y < 0) {
        ball.yspeed = ball.yspeed * -1;
    }
    }

    function move() {
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
    }





    
