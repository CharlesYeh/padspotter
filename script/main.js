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
	
	// show loading animation
	showListviewLoading();
}
function showListviewLoading() {
	var div = document.getElementById('list_view');
	div.innerHTML = "";
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

function filterSearch() {
	var box0 = (document.getElementById("box_0").checked);
	var box1 = (document.getElementById("box_1").checked);
	var box2 = (document.getElementById("box_2").checked);
	var box3 = (document.getElementById("box_3").checked);
	var box4 = (document.getElementById("box_4").checked);
	var box5 = (document.getElementById("box_5").checked);
	var box6 = (document.getElementById("box_6").checked);
	
	showListviewLoading();
	
	request("resources/search.php",  "amen_util="	+ box0 +
									"&amen_heat="	+ box1 +
									"&amen_net="	+ box2 +
									"&amen_pets="	+ box3 +
									"&amen_nonsmoke="+ box4 +
									"&amen_furn="	+ box5 +
									"&amen_laund="	+ box6 +
									"&min_price="	+ barPrice.getStart() +
									"&max_price="	+ barPrice.getEnd() +
									"&min_beds="	+ barBeds.getStart() +
									"&max_beds="	+ barBeds.getEnd() +
									"&min_baths="	+ barBaths.getStart() +
									"&max_baths="	+ barBaths.getEnd()
									, renderListview);
}
