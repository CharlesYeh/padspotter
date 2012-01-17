<?php

require_once('databases.php');
db_login();

$amen0 = $_POST['amen_util'];
$amen1 = $_POST['amen_heat'];
$amen2 = $_POST['amen_net'];
$amen3 = $_POST['amen_pets'];
$amen4 = $_POST['amen_nonsmoke'];
$amen5 = $_POST['amen_furn'];
$amen6 = $_POST['amen_laund'];

$minprice = $_POST['min_price'];
$maxprice = $_POST['max_price'];
$minbeds = $_POST['min_beds'];
$maxbeds = $_POST['max_beds'];
$minbaths = $_POST['min_baths'];
$maxbaths = $_POST['max_baths'];

//####################### SANITIZE INPUT ##########################

if (isset($_POST['min_price'])) {
	$result = mysql_query("SELECT * FROM houses WHERE price >= $minprice AND price <= $maxprice AND bedrooms >= $minbeds AND bedrooms <= $maxbeds AND bathrooms >= $minbaths AND bathrooms <= $maxbaths");
	//$houses = array(0, 1, 2, 3);
}
else {
	$result = mysql_query('SELECT * FROM houses');
	//$houses = array(0, 1, 2, 3, 4, 5, 6, 7, 8);
}

$houses = array();
while ($row = mysql_fetch_array($result)) {
	array_push($houses, $row['id']);
}

// DO NOTHING, HARD CODED RESPONSES

?>

{
	"houses": [
		<?php
		foreach ($houses as $h) {
			
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, 'http://eactiv.com/padspotter/resources/house.php?id=' . $h);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			echo curl_exec($ch) . ', ';
			curl_close($ch);
			
		}
		?>
	]
}