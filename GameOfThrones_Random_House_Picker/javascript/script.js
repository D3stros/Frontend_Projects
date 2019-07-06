function randomImage(){
	var el = document.getElementById("random-image-container");
	var randomNumber = Math.floor((Math.random() * 3) + 1);
	if (randomNumber == 1){
	el.className = "random-image-01";
	} else if (randomNumber == 2) {
		el.className = "random-image-02";
	} else {
		el.className = "random-image-03"
	}
}