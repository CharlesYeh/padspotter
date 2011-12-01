<?php

//-----------------------------LOGIN-----------------------------
function db_login(){
	
	$ip		= "dbgamestest.db.4526347.hostedresource.com";
	$dbname	= "dbgamestest";
	$pw		= "Y3h22015";
	$db		= mysql_connect($ip, $dbname, $pw);
	
	if (!$db){
		//error
		die("<p>Error connecting to database!</p>");
	}
	
	mysql_select_db($dbname , $db);
}
//---------------------------END LOGIN---------------------------

?>