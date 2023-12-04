let yoff = 0.0; 
let Sand;
let swim = [];
let swimm = [];
let bubbles = [];
let coralorange;
let coralblu;

function preload(){
  
  coralorange = loadImage('photograph/coral.png')
  
   coralblu = loadImage('photograph/Corall.png')
}

function setup() {
  createCanvas(400, 500);
  background('#78BDF1');

  for (let i = 0; i < 5; i++) {
    bubbles[i] = new Bubble(random(width), random(4, 8));
  }
}

function mousePressed() {
  if (second() % 2 === 0) {
    if (mouseY > 310);
      if (mouseIsPressed) {
        console.log('fish');
        let colors = [ '#53D367', '#771CCA', '#E62BBA', '#CD6526', '#D9616B', '#795548'];
        let color = random(colors);

        let c = color;
        let r = 50;
        let h = 20;

        let b = new fish(mouseX, mouseY, r, h, c);
        swim.push(b);
      }
  } else if (second() % 8 !== 0) {
    if (mouseY > 310);
      if (mouseIsPressed) {
        console.log('fosh');
        let colors = ['#E53111', '#4C7CD9', '#F44336', '#337559', '#F10D7D', '#A511E7', '#FFC107'];
        let color = random(colors);

        let c = color;
        let r = 50;
        let h = 20;

        let k = new fishh(mouseX, mouseY, r, h, c);
        swimm.push(k);
      }
  }
}
function draw() {
  background('#ABD0EB');
  sea();
  sand();
    
   image(coralblu,30,320,200,200);
  
   image(coralorange, 20,350,330,290);
  
for (let fish of swim) {
    fish.move();
    fish.show();
  }

  for (let fishh of swimm) {
    fishh.move();
    fishh.show();
  }


  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}
class fish {
  constructor(x, y, r, h, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.h = h;
    this.c = c;
  }

  move() {
    this.x += 1.3;
    this.y += random(-0.5, 0.5);
  }

  show() {
    noStroke();
    fill(this.c);
    triangle(this.x - 30, this.y - 10, this.x - 30, this.y + 10, this.x, this.y)
    ellipse(this.x, this.y, this.r, this.h)
    stroke(255, 50);
    strokeWeight(2);
    arc(this.x, this.y, 6, 6, TWO_PI + HALF_PI, PI + HALF_PI);
  }
}
  
class fishh {
  constructor(x, y, r, h, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.h = h;
    this.c = c;
  }

  move() {
    this.x += -1.3;
    this.y += random(-0.5, 0.5);
  }

  show() {
    noStroke();
    fill(this.c);
    triangle(this.x + 30, this.y + 10, this.x + 30, this.y - 10, this.x, this.y);
    ellipse(this.x, this.y, this.r, this.h);
    stroke(255, 50);
    strokeWeight(2);
    arc(this.x, this.y, 6, 6, PI + HALF_PI, TWO_PI + HALF_PI);
  }
}

class Bubble {
  constructor(bubx, buby) {
    this.x = bubx;
    this.y = buby;
    this.size = random(5, 5);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  move() {
    this.x += random(1, 1);
    this.y += random(0, -2);
    if (this.y < 0) {
      this.y = random(height, height + 100);
    }
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
  }

  show() {
    stroke('#B4D0E5');
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.size, this.size);
    ellipse(this.x + 10, this.y + 10, this.size, this.size);
  }
}

function sea() {
  
  fill('#438DC9');
  noStroke();
  beginShape();
  let xoff = 0; 
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, 20, 100);
    vertex(x, y);
    xoff += 0.05;
  }

  
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function sand() {
  fill('#B3A16E7A');
  noStroke();
  square(0, 400, 500, 5, 5);

}