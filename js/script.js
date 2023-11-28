

let PARTICLES = 200; 

let particles = [];

function setup() {
  let canvas = createCanvas(600, 600);

  
  for (let i = 0; i < PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(-height, 0)); 
  }
}

function draw() {
  background(159, 196,236);
  
 
  fill(255);
  noStroke(0);
  rect(0,500,600);
  
   stroke(139, 69, 19); 
  strokeWeight(6);
  line(270, 350, 220, 380); 
  line(330, 350, 380, 380);
  
  fill(255);
  noStroke(0);
  strokeWeight(2);
  ellipse(300, 450, 150, 150);
  
  ellipse(300, 350, 100, 100);
  
   ellipse(300, 280, 70, 70);
  
   fill(0);
  ellipse(310, 260, 10, 10);
  ellipse(290, 260, 10, 10);
  
      
  fill(255, 165, 0); 
  triangle(300, 275, 260, 280, 300, 290);
  
   fill(0);
  ellipse(300, 330, 10, 10); 
  ellipse(300, 360, 10, 10); 
  ellipse(300, 390, 10, 10);
  
  rect(275,200,50,40);
  
  rect(267,240,65,10)
  
  


  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.move();
  }
}

class Particle {
  
  constructor(startX, startY) {
    
    this.x = startX;
    this.y = startY;
    this.dia = random(8);
    this.ySpd = random(1, 5); 
    this.xSpd = random(-1, 1); 
    this.x = random(width);
  }

  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;

    
    if (this.y > height + this.dia) {
      this.y = random(-this.dia); 
      this.x = random(width); 
    }
  }


  update() {
    
  }

  display() {
    
    push();
    translate(this.x, this.y);

    fill(255);
    noStroke(0);
    circle(0, 0, this.dia);

    pop();
  }
}
