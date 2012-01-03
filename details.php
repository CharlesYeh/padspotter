<html>
	<head>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
		
		<link rel="stylesheet" type="text/css" href="style/main.css">
		<link rel="stylesheet" type="text/css" href="style/banner.css">
		<link rel="stylesheet" type="text/css" href="style/details.css">
		
		<script src="http://maps.googleapis.com/maps/api/js?sensor=true&region=US"></script>
		<script src="script/ajax.js"></script>
		<script src="script/details.js"></script>
	</head>
	<body>
	<script>
		showHouseID();
		
	</script>
	<table>
		<tr>
			<td>
				<img src="images/icon_80x80.jpg">
			</td>
			<td width="500px">
				<script>
					showQuickData();
				</script>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<script>
					showDescription();
				</script>
			</td>
		</tr>
	</table>
</body>
</html>
