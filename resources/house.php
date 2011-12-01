<?php

require_once('databases.php');
db_login();

$id = $_GET['id'];
if (!is_numeric($id)) {
	die('Invalid house ID.');
}

$result = mysql_query('SELECT * FROM houses WHERE id = ' . $id) or die('Failed to retrieve house data');
$row = mysql_fetch_assoc($result);

$house = array('id'			=> $row['id'],
			   'idLandlord' => $row['idLandlord'],
			   'price'		=> $row['price'],
			   'bedrooms'	=> $row['bedrooms'],
			   'bathrooms'	=> $row['bathrooms'],
			   'kitchens'	=> $row['kitchens'],
			   
			   'phone'		=> $row['phone'],
			   
			   'availableStart'	=> $row['availStart'],
			   'availableEnd'	=> $row['availEnd'],
			   
			   'includedElectric'=> $row['boolElectric'],
			   
			   'hasParking'	=> $row['boolParking'],
			   'hasAC'		=> $row['boolAC'],
			   'hasFurniture'	=> $row['boolFurniture'],
			   'hasPets'	=> $row['boolPets'],
			   'hasHandicap'=> $row['boolHandicap'],
			   
			   'isNonsmoking'	=> $row['boolNonsmoking']
			}

echo json_encode($house);

?>