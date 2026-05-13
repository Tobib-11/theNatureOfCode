/** This is a setup function. */
function setup() {
  createCanvas(640, 240);
  background(1);
  circle(width / 2, height / 2, 200);
}

/** This is a draw function. */
function draw() {
  rechtMode(CENTER);
  square(random(width), random(height), 20);
}
