let carX;


function setup(){
  createCanvas(500, 500);


// // draw race car wheel
//
//   fill(0);
//   stroke(255);
//   strokeWeight(2);
//   ellipse(60, 350, 20, 20);
//   ellipse(90, 350, 20, 20);

    console.log('carX is ' + carX);
    carX = 50;

  }



  function draw(){
    background(0, 255, 0, 80);





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
    fill(40, 50, 220)
    rect(carX, 300, 50, 30);

}
