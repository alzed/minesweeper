let cnv;

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

const ROW = 5;
const COLUMN = 5;
const boxSize = 50;

function setup() {
  const cnvWidth = COLUMN*boxSize;
  const cnvHeight = ROW*boxSize;
  cnv = createCanvas(cnvWidth, cnvHeight);
  centerCanvas();
  background(50);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(50);
}
