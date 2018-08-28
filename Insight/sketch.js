/**
 * Created by Ronnie on 8/13/18.
 */

var cnv;
var x;
var y;
var xAfter;
var yAfter;
var xSpeed;
var ySpeed;
var mic;


// function centerCanvas() {
//     var x = (windowWidth - width) / 2;
//     var y = (windowHeight - height) / 2;
//     cnv.position(x, y);
//     cnv.style('z-index',-1);
// }

function setup() {
    // cnv = createCanvas(windowWidth, windowHeight);
    // system = new ParticleSystem(createVector(width/2, 0));
    // cnv.style('z-index',-1);
}

function draw() {
    // background(251,240,212);
    // system.addParticle();
    // system.run();
}

// function setup() {
//     cnv = createCanvas(windowWidth, windowHeight);
//     centerCanvas();
//     x = 100;
//     y = 300;
//     x = xAfter;
//     y = yAfter;
//     xSpeed = 10;
//     ySpeed = 25;
//
// }

// function windowResized() {
//     centerCanvas();
// }


// function draw(){
//     strokeWeight(5);
//     stroke(246,134,75);
//     line(x,100,xAfter,0);
//     x += 30;
//     // console.log(xAfter);
//     // if(mouseIsPressed) {
//     //     console.log("pressed!");
//     //     line(pmouseX, pmouseY, mouseX, mouseY);
//     // }
// }

//============clear the canvas===========
function keyPressed(){
    clear();
}

//============Particle System==============
var system;



// A simple Particle class
var Particle = function(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
};

Particle.prototype.run = function() {
    this.update();
    this.display();
};

// Method to update position
Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
    return this.lifespan < 0;
};

var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
        var p = this.particles[i];
        p.run();
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
};
