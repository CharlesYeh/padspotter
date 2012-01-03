function getURLVars() {
	var vars = {};
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { vars[key] = value; });
	
	return vars;
}

function result() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		if (xmlhttp.responseText == 'SUCCESS') {
			
		}
		else if (xmlhttp.responseText == 'ALREADYVOTED') {
			
		}
    }
}

function request(reqlink, data, result){
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = result;
	xmlhttp.open("POST", reqlink, true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(data);
}

