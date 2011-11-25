function initialize() {
	var latlng = new google.maps.LatLng(41.825,-71.40);
	var myOptions = {zoom:		16,
					 center:	latlng,
					 mapTypeId: google.maps.MapTypeId.ROADMAP
	    			};
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function resize() {
	// adjust width/height
}
