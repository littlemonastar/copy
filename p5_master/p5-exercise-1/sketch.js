// Lives stream from class demo is here: https://youtu.be/vE6GQu9cQCE
// final demo (but with competed racecar shape): https://art75.github.io/in-class-exercises/p5_master/p5-exercise-1/index.html


let carX = 50;
let vroom;


function setup() {
  createCanvas(500, 500);
  vroom = new p5.Oscillator('square');
  vroom.start();
}

function draw() {
  background(150, 50, 255, 80);

  // tie sound frequence to carX
  vroom.freq(carX);

  // Below are two nested if statements
  // First is timer to start moving car after 120 frames = 2 seconds
  // Second controls speed: when car hits edge (500px), it resets
  // when carX hits 300, speed it up, increasing by 6
  // otherwise have it increase by 3

  if (frameCount > 120) {
    if (carX >= 500) {
      carX = -50;
    } else if (carX >= 300) {
      carX += 6;
    } else { // otherwise it's just increasing by 3
      carX += 3;
    }

  }
  // drawing car body
  noStroke();
  fill(255, 50, 50);
  triangle(carX, 50, carX + 60, 80, carX, 80);

  // drawing car wheels
  fill(0);
  ellipse(carX, 80, 20, 20);
  ellipse(carX + 50, 80, 20, 20);
}


// mute it with mouse click!
function mousePressed() {
  vroom.stop();
}
