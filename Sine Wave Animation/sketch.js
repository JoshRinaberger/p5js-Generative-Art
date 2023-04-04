function setup() {
  createCanvas(800, 400);
  
}

let offset = 0;
let animRate = .25;

let waveHeight = 40;
let waveHeightChangeDir = 1;

function draw() {
  background(220);

  drawBounds();
  drawSine(offset);

  offset += animRate;
  updateWaveHeight();
}

function drawSine(offset) {
  let a = offset;
  let increment = TWO_PI / 25.0;
  for (let i = 0; i < width / 4; i++) {
    line(i * 4, height / 2, i * 4, height / 2 + sin(a) * waveHeight);
    a += increment;
  }
}

function updateWaveHeight() {
  waveHeight += waveHeightChangeDir * animRate;

  if (waveHeight > height / 3) {
    waveHeightChangeDir = -1;
  } else if (waveHeight < 40) {
    waveHeightChangeDir = 1;
  }
}

function drawBounds () {
  line (0, height / 2 + height / 3, width,  height / 2 + height / 3);
  line (0, height / 2 - height / 3, width,  height / 2 - height / 3);
}