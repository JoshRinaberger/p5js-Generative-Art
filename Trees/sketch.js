var addLeaves = true;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);

  noLoop();
}

function draw() {
  background(100);

  // align to center
  translate(width / 2, height - height / 8);

  drawBranch(height / random(7, 9));
}

function drawBranch(length) {
  push();
  if (length > 10) {

    strokeWeight(map(length, 10, 100, 1, 15));
    //brown
    stroke(70, 40, 20);

    line(0, 0, 0, -length);

    // rotate all further branches
    translate(0, -length);

    rotate(random(20, 30));
    drawBranch(length * random(.7, .9));

    rotate(random(-50, -60))
    drawBranch(length * random(.7, .9));
  } else if (addLeaves) {

    // green leaves
    /*var r = 80 + random(-20, -20);
    var g = 120 + random(-20, 20);
    var b = 40 + random (-20, 20);*/

    // pink leaves
    var r = 220 + random(-20, -20);
    var g = 120 + random(-20, 20);
    var b = 170 + random (-20, 20);
    fill(r, g, b);
    noStroke();
    
    beginShape();
    for (var i = 45; i < 135; i++) {
      var rad = 15;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }

    for (var i = 135; i > 45; i--) {
      var rad = 15;
      var x = rad * cos(i);
      var y = rad * sin(-i) + 20;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
  pop();
}