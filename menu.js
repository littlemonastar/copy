let burger;
let img_burger;
let onigiri
let img_onigiri;
let ramen;
let img_ramen;
let pudding;
let img_pudding;
let salmonSushi;
let img_salmonSushi;

function preload(){
  img_burger = loadImage("menu/burger.png");
  img_onigiri = loadImage("menu/onigiri.png");
  img_ramen = loadImage("menu/ramen.png");
  img_pudding = loadImage("menu/pudding.png");
  img_salmonSushi = loadImage("menu/salmonSushi.png");
  img_mocatopia = loadImage("menu/mocatopia.png");
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(windowWidth, 500);
  var w = (windowWidth - width) / 2;
  var h = (windowHeight - height) / 2;
  cnv.position(w, h);
  burger = new Falling_burger(width * 0.36, 0);
  onigiri = new Falling_onigiri(width * 0.36, 0);
  ramen = new Falling_ramen(width * 0.36, 0);
  pudding = new Falling_pudding(width * 0.36, 0);
  salmonSushi = new Falling_salmonSushi(width * 0.36, 0);
}

function draw() {
  background('#f9fff0');
  burger.render();
  onigiri.render();
  ramen.render();
  pudding.render();
  salmonSushi.render();
  fill(255);
  //noStroke();
  rect(95, 210, 500, 100)
  image(img_mocatopia, 135, 230);
  textFont('monospace');
  fill("#594100");
  textSize(80);
}
