function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  
  coloredPerlinNoise();
  simplePerlinNoise();
}

/*
function draw() {
  background(220);
}*/

function simplePerlinNoise() {
  let resolution = 0.02;

  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
      let n = noise(i * resolution, j * resolution);
      let alph = 20;
      let brt = map(n, 0, 1, 0, 100);
      fill(0, 0, brt, alph);

      rect(i, j, 3);
    }
  }
}

function coloredPerlinNoise() {
  let resolution = 0.02;

  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
      let n = noise(i * resolution, j * resolution) * 10;

      let huey;

      if (n < 2){huey = 80}
      else if (n < 4){huey = 150}
      else if (n < 4){huey = 210}
      else if (n < 4){huey = 280}
      else {huey = 360}

      let alph = 40;
      fill(huey, 90, 90, alph);

      rect(i, j, 3);
    }
  }
}