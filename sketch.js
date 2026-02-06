let n = 0;
let c = 6; // spacing between leaves
let angle = 137.5; // golden angle (magic number)

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  translate(width / 2, height / 2);

  let a = n * angle;
  let r = c * sqrt(n);

  let x = r * cos(a);
  let y = r * sin(a);

  let hue = (n * 0.5) % 360;

  noStroke();
  fill(hue, 80, 100, 80);

  // leaf-like ellipse
  push();
  translate(x, y);
  rotate(a);
  ellipse(0, 0, 12, 30);
  pop();

  n++;

  // reset softly when it gets too big (keeps it infinite)
  if (r > max(width, height)) {
    n = 0;
    background(10, 10, 10, 20);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(10);
}
