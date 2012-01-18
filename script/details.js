// JavaScript Document
var vars = getURLVars();
console.debug(vars);
var id = vars["id"];

var house;

// synchronously load house data
request('api/house.php?id=' + id, '', loadHouse, false);

function loadHouse() {
	console.debug(xmlhttp.responseText);
	house = eval('(' + xmlhttp.responseText + ')');
}
function showHouseID() {
	document.write("House ID = " + id + "<br />");
}
function showQuickData() {
	if (xmlhttp.readyState!=4 || xmlhttp.status!=200)
		return;
	
	document.write(house.bedrooms + " Bedrooms / " + house.bathrooms + " Bathrooms<br />");
	document.write("$" + house.price + "/month/person<br />");
	document.write("electric: " + house.includedElectric + "<br />");
	document.write("has parking: " + house.hasParking + "<br />");
	document.write("has AC: " + house.hasAC + "<br />");
	document.write("has furniture: " + house.hasFurniture + "<br />");
	document.write("has pets: " + house.hasPets + "<br />");
	document.write("has handicap: " + house.hasHandicap + "<br />");
	document.write("is nonsmoking: " + house.isNonsmoking + "<br />");
}
function showDescription() {
	document.write(house.description);
}
