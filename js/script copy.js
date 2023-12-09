
let yoff = 0.0; 
let Sand;
let swim = [];
let swimm = [];
let bubbles = [];
let coralorange;
let coralblu;
let fish1;
let fish2;
let fish3;
let fish4;
let fish5;
let fish6;
let fishback;
let slider;

function preload() {
  coralorange = loadImage('assets/coral.png');
  coralblu = loadImage('assets/Corall.png');
  fish1 = loadImage('assets/Fish1.webp');
  fish2 = loadImage('assets/9033.png');
  fish3 = loadImage('assets/9032.png');
  fish4 = loadImage('assets/Fish4.png');
  fish5 = loadImage('assets/Fish5.png');
  fish6 = loadImage('assets/Fish6.png');
  fishback = loadImage('assets/Fishback.png');
}

function setup() {
  
  let canvas= createCanvas(400, 500);
canvas.parent("p5container")
background(120,189,242);

  createInterface();


  for (let i = 0; i < 5; i++) {
    bubbles[i] = new Bubble(random(width), random(4, 8));
  }
}

function mousePressed() {
  if (second() % 2 === 0 && mouseY > 50 && mouseY < 500 && mouseIsPressed) {
    console.log('fish');
    if (swim.length < 5) {
      let j = 50;
      let h = 20;
      let currentFishImage = random([fish4, fish5, fish6]);
      let a = new Fish(mouseX, mouseY, j, h, currentFishImage);
      swim.push(a);
    }
  } else if (second() % 8 !== 0 && mouseY > 50 && mouseY < 500 && mouseIsPressed) {
    console.log('fishh');
    let j = 50;
    let h = 20;
    let currentFishImage = random([fish1, fish2, fish3]);
    if (swimm.length < 5) {
      let i = new Fishh(mouseX, mouseY, j, h, currentFishImage);
      swimm.push(i);
    }
  }
}

function createInterface() {
  slider = createSlider(0, 255, 127);
  slider.position(700,760);
  slider.style('width', '90px');
  slider.parent('interfaces');
  
  
}

function draw() {
  background(171,208,235);
  sea();
  hill();
  sand();
  fishbackk();


  
  let offset = slider.value();
  tint(255 - offset, 255 - offset, 255 - offset);
  image(coralblu, 30, 320, 200, 200);
  tint(255 - offset, 255 - offset, 255 - offset);
  image(coralorange, 20, 350, 330, 290);
  noTint();
  
  if (offset === 255) {
    
    //bubbles= [];
    
    swim = [];
    swimm = [];
    
  }

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

class Fish {
  constructor(x, y, j, h, img) {
    this.x = x;
    this.y = y;
    this.j = j;
    this.h = h;
    this.img = img;

  }

  move() {
    this.x += 1.3;
    
    if (this.x > width + this.j * 1.2) {
      this.x = -this.j * 1.2;
      this.y = random(100, height);

    }
  }

  show() {
    image(this.img, this.x, this.y, this.j * 1.2, this.h * 1.5);
  }
}

class Fishh {
  constructor(x, y, j, h, img) {
    this.x = x;
    this.y = y;
    this.j = j;
    this.h = h;
    this.img = img;
  }

  move() {
    this.x += -1.3;
    

    if (this.x < -this.j * 1.2) {
      this.x = width + this.j * 1.2;
      this.y = random(100, height);
    }
  }

  show() {
    image(this.img, this.x, this.y, this.j * 1.2, this.h * 1.5);
  }
}

class Bubble {
  constructor(bubx, buby) {
    this.x = bubx;
    this.y = buby;
    this.size = random(10, 2);
   
  }

   move() {
    this.x += random(-1, 1);
    this.y += random(-2, 0);
    if (this.y < 75) {
      this.y = random(height, height - 100);
    }
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
  }
  
  show() {
    stroke(210,221,233);
    strokeWeight(1.5);
    noFill();
    ellipse(this.x, this.y, this.size, this.size);
    
  }
}

function sea() {
  fill(46,140,219);
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

function fishbackk() {
  image(fishback, 300, 300, 40, 30);
}

function hill() {
  fill(69,76,106);
  ellipse(400, height - 50, 400, 280);

  fill(69,76,106);
  ellipse(10, height - 50, 300, 280);
  fill(69,76,106);
  ellipse(300, height - 50, 280, 150);
}

function sand() {
  fill(160,145,60);
  noStroke();
  square(0, 400, 500, 5, 5);

}