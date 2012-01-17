// JavaScript Document

var filterBtns = new Array("Utilities Included", "Heat/Gas Included", "Internet Included", "Pets Allowed", "No Smoking", "Furniture Included", "Laundry Available");
var images = new Array("btn_25x25.jpg", "btn_25x25.jpg", "btn_25x25.jpg", "btn_25x25.jpg", "btn_25x25.jpg", "btn_25x25.jpg", "btn_25x25.jpg");

//----------------------------------------SLIDE BARS----------------------------------------

var BAR_WIDTH = 250;
var bars = 0;

var dragId = -1;
var dragPoint = 0;

function SelectBar(min, max, intervals, label) {
	if(typeof(label) == 'undefined')
		label = '';
	
	this.min = min;
	this.max = max;
	this.intervals = intervals;
	this.label = label;
	this.id = bars++;
	
	this.start = 0;
	this.end = BAR_WIDTH;
	
	// functions
	this.draw = draw;
	this.getStart = getStart;
	this.getEnd = getEnd;
	this.getStartInterval = getStartInterval;
	this.getEndInterval = getEndInterval;
	this.mouseMoveHandler = mouseMoveHandler;
	this.mouseDownHandler = mouseDownHandler;
	this.mouseUpHandler = mouseUpHandler;
	
	// draw graphic
	document.write("<canvas id='bar_" + this.id + "' width='" + BAR_WIDTH + "' height='30' onmousedown='return false;' ondblclick='return false;' ondragstart='return false;'></canvas>");
	this.canvas = document.getElementById("bar_" + this.id);
	this.canvas.parent = this;
	this.draw();
	
	this.canvas.addEventListener('mousemove', this.mouseMoveHandler, false);
	this.canvas.addEventListener('mousedown', this.mouseDownHandler, false);
	this.canvas.addEventListener('mouseup', this.mouseUpHandler, false);
}

function draw() {
	var ctx = this.canvas.getContext("2d");
	ctx.clearRect(0, 0, BAR_WIDTH, 30);
	
	ctx.strokeStyle = "rgb(0, 0, 0)";
	ctx.fillStyle = "rgb(150, 0, 0)";
	ctx.fillRect(0, 0, BAR_WIDTH, 30);
	
	ctx.fillStyle = "rgb(255, 255, 150)";
	ctx.fillRect(this.start, 1, this.end - this.start, 28);
	
	// draw interval guides
	ctx.strokeStyle = "rgb(0, 0, 0)";
	ctx.lineWidth = 1;
	for (var i = 0; i < this.intervals; i++) {
		var lx = BAR_WIDTH / this.intervals * i;
		ctx.moveTo(lx, 0);
		ctx.lineTo(lx, 10);
		ctx.stroke();
		
		var int = (this.max - this.min) / this.intervals * i + this.min;
		ctx.font = "7pt Arial";
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.fillText(this.label + int.toString(), lx + 2, 8);
	}
	
}
function getStart() {
	return this.start / BAR_WIDTH * (this.max - this.min) + this.min;
}
function getEnd() {
	return this.end / BAR_WIDTH * (this.max - this.min) + this.min;
}
function getStartInterval() {
	return Math.round(this.start / BAR_WIDTH * this.intervals);
}
function getEndInterval() {
	return Math.round(this.end / BAR_WIDTH * this.intervals);
}
function mouseUpHandler (ev) {
	dragId = -1;
}
function mouseDownHandler (ev) {
	dragId = this.id;
	
	var x = getEventX(ev);
	var y = getEventX(ev);
	
	var toStart = Math.abs(x - this.parent.start);
	var toMid = Math.abs(x - (this.parent.start + this.parent.end) / 2);
	var toEnd = Math.abs(x - this.parent.end);
	
	var smallest = Math.min(toStart, toEnd);	// consider middle?
	
	switch (smallest) {
	case toStart:
		dragPoint = 0;
		break;
	case toMid:
		dragPoint = 1;
		break;
	case toEnd:
		dragPoint = 2;
		break;
	}
	
	mouseMoveHandler(ev);
}

function getEventX(ev, canv) {
	// Get the mouse position relative to the canvas element.
	if (ev.offsetX || ev.offsetX == 0) { // Opera
		return ev.offsetX;
	} else if (ev.layerX || ev.layerX == 0) { // Firefox
		return ev.layerX;
	}
}
function getEventY(ev, canv) {
	// Get the mouse position relative to the canvas element.
	if (ev.offsetX || ev.offsetX == 0) { // Opera
		return ev.offsetY;
	} else if (ev.layerX || ev.layerX == 0) { // Firefox
		return ev.layerY;
	}
}
function mouseMoveHandler (ev) {
	var x = getEventX(ev);
	
	if (dragId == -1)
		return;
	
	var snappedX = Math.round(x / BAR_WIDTH * this.parent.intervals);
	
	// start dragging
	switch (dragPoint) {
	case 0:	//start
		if (snappedX <= this.parent.getEndInterval())
			this.parent.start = snappedX * BAR_WIDTH / this.parent.intervals - 5;
		break;
	case 1:	//mid
		
		break;
	case 2:	//end
		if (snappedX >= this.parent.getStartInterval())
			this.parent.end = snappedX * BAR_WIDTH / this.parent.intervals + 5;
		break;
	}
	
	this.parent.draw();
}

//----------------------------------------BUTTONS----------------------------------------
function drawFilterBtns() {
	for (var a = 0; a < filterBtns.length; a++) {
		document.write("<div id='box_img_" + a + "' ondblclick='return false;' ondragstart='return false;'"
					   		+ "class='amenity_box' onmouseover=\"title='" + filterBtns[a] + "'\">");
			document.write("<input name='amen_" + a + "' id='box_" + a + "' ondragstart='return false;' type='checkbox' checked='' />");
		document.write("</div>");
		
		var i = document.getElementById("box_img_" + a);
		var b = document.getElementById("box_" + a);
		b.style.display = "none";	// hide checkbox to replace with image
		
		i.id	= a;
		i.box	= b;
		i.img	= images[a];
		i.onclick = clickFilterBtn;
		
		// initialize image
		i.onclick();
	}
}

function clickFilterBtn() {
	this.box.checked = (this.box.checked == "") ? "yes" : "";
	
	if (this.box.checked)
		this.style.background = "url(images/pressed" + this.img + ")";
	else
		this.style.background = "url(images/" + this.img + ")";
	
}
