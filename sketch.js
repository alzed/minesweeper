let cnv;

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(300, 300);
  centerCanvas();
  background(50);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(50);
}