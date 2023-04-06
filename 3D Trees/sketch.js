function setup() {
  // webgl for 3d
  createCanvas(800, 800, WEBGL);

  angleMode(DEGREES);
  //noLoop();
}

function draw() {
  background(200);

  randomSeed(1);

  translate(0, height / 2 - height / 8, 0);

  rotateY(frameCount);

  // length parameter influences size of tree.
  // bigger than 50 looks cool but starts to lag badly on my machine.
  drawBranch(50);
}

function drawBranch(length) {
  // thickness
  strokeWeight(map(length, 10, 100, 0.5, 5));
  // brown color
  stroke(70, 40, 20);

  line(0, 0, 0, 0, -length - 2, 0);

  translate(0, -length, 0);

  if (length > 10) {
    for (var i = 0; i < 3; i++) {
      rotateY(random(100, 140));

      push();

      rotateZ(random(20, 50));
      drawBranch(length * random(.6, .7));

      pop();
    }
  } else {
    // leaves
    var r = 80 + random(-20, 20);
    var g = 120 + random(-20, 20);
    var b = 40 + random(-20, 20);

    fill(r, g, b, 200);
    noStroke();

    translate(5, 0, 0);

    rotate(90);

    beginShape();

    for (var i = 45; i < 135; i++) {
      var rad = 7;
      x = rad * cos(i);
      y = rad * sin(i);
      vertex(x, y);
    }

    for (var i = 135; i > 45; i--) {
      var rad = 7;
      x = rad * cos(i);
      y = rad * sin(i) + 10;
      vertex(x, y);
    }

    endShape(CLOSE);
  }
}