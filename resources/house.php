<?php

require_once('databases.php');
db_login();

$id = $_GET['id'];
if (!is_numeric($id)) {
	die('Invalid $house ID.');
}

$result = mysql_query('SELECT * FROM houses WHERE id = ' . $id);
$row = mysql_fetch_array($result);

	$house->id = $row['id'];
	$house->idLandlord = $row['isLandlord'];
	$house->price = $row['price'];
	$house->bedrooms = $row['bedrooms'];
	$house->bathrooms = $row['bathrooms'];
	$house->kitchens = $row['kitchens'];
		   
	$house->phone = $row['phone'];
		   
	$house->availableStart = $row['availStart'];
	$house->availableEnd = $row['availEnd'];
		   
	$house->includedElectric = false;
		   
	$house->hasParking = true;
	$house->hasAC = true;
	$house->hasFurniture = true;
	$house->hasPets = true;
	$house->hasHandicap = false;
		   
	$house->isNonsmoking = false;
	$house->description = 'Cozy home on Thayer street. Good location and good price. Currently being renovated but will be done soon.';

// hard-coded TEMPORARY values
/*switch ($id) {
case 4:
case 5:
case 7:
case 0:
	
	$house->id = 0;
	$house->idLandlord = 0;
	$house->price = 1000;
	$house->bedrooms = 2;
	$house->bathrooms = 3;
	$house->kitchens = 1;
		   
	$house->phone = '123 456 7890';
		   
	$house->availableStart = '2012-05-05';
	$house->availableEnd = '2012-06-06';
		   
	$house->includedElectric = false;
		   
	$house->hasParking = true;
	$house->hasAC = true;
	$house->hasFurniture = true;
	$house->hasPets = true;
	$house->hasHandicap = false;
		   
	$house->isNonsmoking = false;
	$house->description = 'Cozy home on Thayer street. Good location and good price. Currently being renovated but will be done soon.';
	break;
case 6:
case 1:
	$house->id		= 1;
	$house->idLandlord		= 0;
	$house->price			= 2500;
	$house->bedrooms		= 4;
	$house->bathrooms		= 5;
	$house->kitchens		= 2;
		   
	$house->phone			= '001 112 2223';
		   
	$house->availableStart	= '2012-08-05';
	$house->availableEnd	= '2013-09-06';
		   
	$house->includedElectric= true;
		   
	$house->hasParking		= false;
	$house->hasAC			= true;
	$house->hasFurniture	= true;
	$house->hasPets		= false;
	$house->hasHandicap	= true;
		   
	$house->isNonsmoking	= false;
	$house->description = 'Very old but still very nice. Super luxurious.';
	break;
case 8:
case 9:
case 3:
case 2:
	$house->id		= 2;
	$house->idLandlord		= 1;
	$house->price			= 799;
	$house->bedrooms		= 5;
	$house->bathrooms		= 3;
	$house->kitchens		= 0;
		   
	$house->phone			= '000 111 2222';
		   
	$house->availableStart	= '2012-01-01';
	$house->availableEnd	= '2013-01-01';
		   
	$house->includedElectric= true;
		   
	$house->hasParking		= true;
	$house->hasAC			= true;
	$house->hasFurniture	= true;
	$house->hasPets		= false;
	$house->hasHandicap	= true;
		   
	$house->isNonsmoking	= true;
	$house->description = 'Give me a call if you\'d like to check out the house! I\'m free Thursdays and weekends.';
	break;
}*/

echo json_encode($house);

?><?