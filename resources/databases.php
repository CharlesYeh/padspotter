<?php

//-----------------------------LOGIN-----------------------------
function db_login(){
	
	$ip		= "dbpadspotter.db.4526347.hostedresource.com";
	$dbname	= "dbpadspotter";
	$pw		= "broccoliN0W";
	$db		= mysql_connect($ip, $dbname, $pw);
	
	if (!$db){
		//error
		die("<p>Error connecting to database!</p>");
	}
	
	mysql_select_db($dbname , $db);
}
//---------------------------END LOGIN---------------------------

?>