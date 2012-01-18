<?php
class House {
	private $house;
	
	public function House($row) {
		$this->house->id = $row['id'];
		$this->house->idLandlord = $row['idLandlord'];
		$this->house->price = $row['price'];
		$this->house->bedrooms = $row['bedrooms'];
		$this->house->bathrooms = $row['bathrooms'];
		$this->house->kitchens = $row['kitchens'];
		
		$this->house->phone = $row['phone'];
		
		$this->house->availableStart = $row['availStart'];
		$this->house->availableEnd = $row['availEnd'];
		$this->house->description = $row['description'];
	}
	public function getProperty(prop) {
		return $this->house[prop];
	}
	public function echoJSON() {
		echo json_encode($this->house);
	}
}
?>