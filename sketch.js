var i;
var y;
let ragged = [];
var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;

function setup() {
    createCanvas(1600, 1000);
    background(127,191,255);
    ragged = new Ragged();
    frameRate(1);
}
        
class Ragged {
    constructor() {
    
    }
//    move() {
//        xOne = xOne + random(-5, 5);
//        xTwo = xTwo + random(-5, 5);
//    }
    show() {
        noFill();
        stroke(random(200, 255),random(200, 250),random(200, 250), 60);
        strokeWeight(random(1, 9));
        strokeCap(SQUARE);
        beginShape();
            vertex(xOne + i, yOne + y);
            vertex(xTwo + i, yTwo + y);
        endShape(CLOSE);
    }
}

function draw() {
    for (i = 0; i < width; i += 11) {
        for (y = 0; y < height; y += 50) {
            xOne = i + random(-10, 10);
            xTwo = xOne + 20;
            
            yOne = y + random(-10, 40);
            yTwo = y + random(120);

            ragged.show();
        //    ragged.move();
        }
    }
}


