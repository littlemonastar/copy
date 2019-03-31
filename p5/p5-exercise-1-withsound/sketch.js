let carX;
let vroom;


function setup(){
  createCanvas(500, 500);
  vroom = new p5.Oscillator('square');
  vroom.start();
}

// // draw race car wheel
//
//   fill(0);
//   stroke(255);
//   strokeWeight(2);
//   ellipse(60, 350, 20, 20);
//   ellipse(90, 350, 20, 20);



  function draw(){
    console.log(frameCount);

    background(255, 255, 0, 80);

    vroom.freq(carX);


  if (carX > 500){
    carX = -50;
  } else if (carX > 400){
    carX += 6;
  } else {
    //carX = carX + 3;
    carX += 3;
  }

  // draw race car body
    noStroke();
    fill(0, 0, 0)
    triangle(carX, 75, 58, 20, 86, 75);

    fill(0);
    ellipse(30, carX + 100, 30, 20);
    quad(30, 31, carX + 30, carX + 100, carX + 45, 63, 30, 76);
}

function mousePressed(){
  carX = 0;
}
