let points = [];

const maxPoints = 15;
const startRadius = 30;

const speed = 0.3;

let finish = false;

let inkified = true;

function setup() {
  createCanvas(800, 800);
  background(220);

  if (inkified)
    noStroke();

  createBurst();
}

function draw() {
  if (finish == false) {
    points.forEach(point => {
      point.update();
      point.draw();
  
      if (point.radius < 0)
        finish = true;
    });
  }

}

function createBurst() {
  for (let i = 0; i < maxPoints; i++) {
    points.push(new Point(width/2, height/2, random(TAU), startRadius));
  }
}

class Point {
  constructor(x, y, angle, radius) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.radius = radius;
    this.startColor = color(60, 0, 60);
    this.endColor = color(255, 200, 255);
  }

  update() {
    this.radius -= 0.5;
    this.angle += random(-PI/6, PI/6);

    this.x += cos(this.angle) * this.radius * speed;
    this.y += sin(this.angle) * this.radius * speed;
  }

  draw() {
    if (inkified) {
    const currColor = lerpColor(this.startColor, this.endColor, map(this.radius, startRadius, 0, 0, 1));
    fill(currColor);
    }

    circle(this.x, this.y, this.radius * 2);
  }
}
