A call to [resources/house.php?id=ID] gives format:

{
	"id": INT,
	"idLandlord": INT,
	
	"price": INT,
	"bedrooms": INT,
	"bathrooms": INT,
	"kitchens": INT,
	
	"phone": "STRING",
	
	"availableStart": "2011-01-01 01:01:0000",
	"availableEnd": "2011-01-01 01:01:0000",
	
	"includedElectric": BOOL,
	
	"hasParking": BOOL,
	"hasAC": BOOL,
	"hasFurniture": BOOL,
	"hasPets": BOOL,
	"hasHandicap": BOOL,
	
	"isNonsmoking": BOOL,
}

A call to [resources/login.php] with POST[username=USER&password=PASSWD] gives format:


