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

function house(id,idLandlord,price,bedrooms,bathrooms,kitchens,phone,availableStart,availableEnd,includedElectric,hasParking,hasAC,hasFurniture,hasPets,hasHandicap,isNonSmoking)
	{
	    this.id=id;//INT
	    this.idLandlord=idLandlord;//INT
	    this.price=price;//INT
	    this.bedrooms=bedrooms;//INT
	    this.bathrooms=bathrooms;//INT
	    this.kitchens=kitchens;//INT
	    this.phone=phone;//STRING
	    this.availableStart=availableStart;//"2011-01-01 01:01:0000"
	    this.availableEnd=availableEnd;//"2011-01-01 01:01:0000"
	    this.includedElectric=includedElectric;//BOOL
	    this.hasParking=hasParking;//BOOL
	    this.hasAC=hasAC;//BOOL
	    this.hasFurniture=hasFurniture;//BOOL
	    this.hasPets=hasPets;//BOOL
	    this.hasHandicap=hasHandicap;//BOOL
	}

}
