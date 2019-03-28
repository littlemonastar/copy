
function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);

}


function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();

	ellipse(mouseX, mouseY, 100);
}
