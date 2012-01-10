// JavaScript Document
function drawFilterBars() {
	var barPrice = new SelectBar(0, 100, 100);
	var barBeds	 = new SelectBar(0, 100, 100);
	var barBaths = new SelectBar(0, 100, 100);
	
	barPrice.draw();
	barBeds.draw();
	barBaths.draw();
}

var bars = 0;
function SelectBar(min, max, w) {
	this.min = min;
	this.max = max;
	this.width = w;
	this.id = bars++;
	
	// functions
	this.ondragstart = dragstart;
	this.ondragend = dragend;
	this.draw = draw;
}

function dragstart() {
	
}
function dragend() {
	
}
function draw() {
	console.debug("ID: " + this.id);
	
	document.write("<div class='filter_bar' id='bar_" + this.id + "'>HI</div>");
	
	var b = document.getElementById("bar_" + this.id);
	b.style.height = "20px";
	b.style.width = this.width + "px";
	
	
}


var filterBtns = new Array("Utilities Included", "Heat/Gas Included", "Internet Included", "Pets Allowed", "No Smoking", "Furniture Included", "Laundry Available");
function drawFilterBtns() {
	for (var a = 0; a < filterBtns.length; a++) {
		document.write("<div id='box_img_" + a + "' ondblclick='return false;' ondragstart='return false;'"
					   		+ "class='amenity_box' onmouseover=\"title='" + filterBtns[a] + "'\">");
			document.write("<input name='amen_" + a + "' id='box_" + a + "' ondragstart='return false;' type='checkbox' checked='' />");
		document.write("</div>");
		
		var i = document.getElementById("box_img_" + a);
		var b = document.getElementById("box_" + a);
		b.style.display = "none";
		i.id	= a;
		i.box	= b;
		i.onclick = clickFilterBtn;
		
		
		// initialize image
		i.onclick();
	}
}

function clickFilterBtn() {
	console.debug("Pressed filter button " + filterBtns[this.id]);
	this.box.checked = (this.box.checked == "") ? "yes" : "";
	
	if (this.box.checked)
		this.style.background = "url(images/pressedbtn_25x25.jpg)";
	else
		this.style.background = "url(images/btn_25x25.jpg)";
	
}
