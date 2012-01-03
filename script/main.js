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

//Pass in a data structure that has an id of each image
function showListview() {
	request('resources/search.php', '', renderListview);
}
function renderListview() {
	if (xmlhttp.readyState!=4 || xmlhttp.status!=200)
		return;
	
	console.debug(xmlhttp.responseText);
	var obj = eval('(' + xmlhttp.responseText + ')');
	var div = document.getElementById('list_view');
	
	var arr = [];
	for (var i = 0; i < obj.houses.length; i++) {
		var house = obj.houses[i];
		
		arr.push("<div class='list_item'>");
			arr.push("<div class='list_item_icon'>");
				arr.push("<a href='details.php?id="+i+"'><img src='images/icon_80x80.jpg' /></a>");
			arr.push("</div>");
			arr.push("<div class='list_item_details'>");
				arr.push(house.bedrooms + " Bedrooms / " + house.bathrooms + " Bathrooms<br />");
				arr.push("$" + house.price + "/month/person<br />");
			arr.push("</div>");
		arr.push("</div>");
	}
	
	div.innerHTML += arr.join("");
}

//Pass the house into showListView and call house.id and get that and pass it into the href.
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
