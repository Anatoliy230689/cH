let leftOffset = 0;
let topOffset = 0;
let speed = 100;
let counter = 0;
let oPos = 0;
let endPos = 500;

var moveHeading = function () {
	$("#heading").offset({
		left: leftOffset,
		top: topOffset
	});

	if (leftOffset <= endPos && topOffset === oPos) {
		leftOffset++;
	}
	if (leftOffset === endPos && topOffset <= endPos) {
		topOffset++;
	}
	if (leftOffset >= oPos && topOffset === endPos) {
		leftOffset--;
	}
	if (leftOffset === oPos && topOffset >= oPos) {
		topOffset--;
	}

}

var intervalId = setInterval(moveHeading, speed);

function stop() {
	clearInterval(intervalId);
	speed = speed - 9;
	intervalId = setInterval(moveHeading, speed);
	counter++;
	$("#heading").text(counter);
	if (counter >= 10) {
		clearInterval(intervalId);
		$("#heading").text('You Win');
	}
}

$("h1").click(stop);

