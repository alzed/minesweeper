let cnv;
let value = 200;
let mX, mY;

const ROW = 5;
const COLUMN = 5;
const boxSize = 50;

const modpos = (pos) => Math.floor(pos/boxSize) * boxSize;

let clicked = [];

const check_clicked = () => {
  if (clicked.length === 0) {
    return false;
  } else {
    for (let i=0; i<clicked.length; i++) {
      if (clicked[i][0] == mX && clicked[i][1] == mY) {
        break;
      }
      if (i == clicked.length-1) {
        return false;
      }
    }
    return true;
  }  
};

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  const cnvWidth = COLUMN*boxSize;
  const cnvHeight = ROW*boxSize;
  cnv = createCanvas(cnvWidth, cnvHeight);
  centerCanvas();
  background('#6b6e6c');
  noStroke();
  fill(200, 200, 200, 0);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background('#6b6e6c');
  for (let i of clicked) {
    fill(50);
    square(i[0], i[1], boxSize);
  }
  fill(200, 200, 200, 30);
  square(mX, mY, boxSize);
}

function mouseMoved() {
  mX = modpos(mouseX);
  mY = modpos(mouseY);
  if (check_clicked()) {
    fill(50);
  }
}

function mouseClicked() {
  mX = modpos(mouseX);
  mY = modpos(mouseY);
  if (!check_clicked()) {
    clicked.push([mX, mY]);
  }  
}
