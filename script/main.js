function initialize() {
	var latlng = new google.maps.LatLng(41.825,-71.40);
	var myOptions = {zoom:		16,
					 center:	latlng,
					 mapTypeId: google.maps.MapTypeId.ROADMAP
	    			};
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	resize();
}
 
function getWinSize(){
	var iWidth = 0, iHeight = 0;
	
	if (document.documentElement && document.documentElement.clientHeight){
		iWidth = parseInt(window.innerWidth,10);
		iHeight = parseInt(window.innerHeight,10);
	}
	else if (document.body){
		iWidth = parseInt(document.body.offsetWidth,10);
		iHeight = parseInt(document.body.offsetHeight,10);
	}
	
	return {width:iWidth, height:iHeight};
}

function resize() {
	// adjust width/height
	var leftcont = document.getElementById("left_container");
	var listview = document.getElementById("list_view");
	
	var winSize = getWinSize();
	var resHeight	= winSize.height - leftcont.offsetTop;
	var resWidth	= winSize.width  - listview.offsetWidth;
	
	leftcont.style.width  = resWidth;
	leftcont.style.height = resHeight;
	listview.style.height = resHeight;
}

function showListview() {
	for (var a = 0; a < 20; a++) {
		document.write("<div class='list_item'>");
			document.write("<div class='list_item_icon'>");
				document.write("<a href='#'><img src='images/icon_80x80.jpg' /></a>");
			document.write("</div>");
			document.write("<div class='list_item_details'>");
				document.write("Bedrooms/Bathrooms<br />");
				document.write("375$/month/person<br />");
			document.write("</div>");
		document.write("</div>");
	}
}
