let puppy;

function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);

	puppy = loadImage('puppy.png');

	noCursor();
}


function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	clear();

	fill(255, 50, 50);
	image(puppy, mouseX - 150, mouseY - 100, puppy.width / 3, puppy.height / 3);
	// ellipse(mouseX, mouseY, 100);
}
