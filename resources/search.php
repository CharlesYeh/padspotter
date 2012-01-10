<?php

require_once('databases.php');
db_login();

$result = mysql_query('SELECT * FROM houses');
// DO NOTHING, HARD CODED RESPONSES

?>

{
	"houses": [
		<?php
		for ($a = 0; $a < 9; $a++) {
			
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, 'http://eactiv.com/padspotter/resources/house.php?id=' . $a);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			echo curl_exec($ch) . ', ';
			curl_close($ch);
			
		}
		
		/*
		{
			"id": 0,
			"idLandlord": 0,
			
			"price": 1000,
			"bedrooms": 2,
			"bathrooms": 3,
			"kitchens": 1,
			
			"phone": "123 456 7890",
			
			"availableStart": "2011-01-01 01:01:0000",
			"availableEnd": "2012-01-01 01:01:0000",
			
			"includedElectric": true,
			
			"hasParking": true,
			"hasAC": true,
			"hasFurniture": false,
			"hasPets": false,
			"hasHandicap": false,
			
			"isNonsmoking": true,
		},
		{
			"id": 1,
			"idLandlord": 0,
			
			"price": 2500,
			"bedrooms": 4,
			"bathrooms": 5,
			"kitchens": 2,
			
			"phone": "001 112 2223",
			
			"availableStart": "2011-05-01 11:01:0000",
			"availableEnd": "2012-05-01 11:01:0000",
			
			"includedElectric": false,
			
			"hasParking": true,
			"hasAC": true,
			"hasFurniture": true,
			"hasPets": false,
			"hasHandicap": false,
			
			"isNonsmoking": false,
		}*/
		?>
	]
}