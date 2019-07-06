function randomImage(){
	var el = document.getElementById("random-image-container");
	var randomNumber = Math.floor((Math.random() * 6) + 1);
	if (randomNumber == 1){
    el.className = "random-image-01";
    document.getElementById("targaryen").style.display = "block";
    document.getElementById("tyrell").style.display = "none";
    document.getElementById("lannister").style.display = "none";
    document.getElementById("stark").style.display = "none";
    document.getElementById("tully").style.display = "none";
    document.getElementById("baratheon").style.display = "none";
	} else if (randomNumber == 2) {
        el.className = "random-image-02";
        document.getElementById("tyrell").style.display = "block";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("lannister").style.display = "none";
        document.getElementById("stark").style.display = "none";
        document.getElementById("tully").style.display = "none";
        document.getElementById("baratheon").style.display = "none";
	} else if (randomNumber == 3) {
        el.className = "random-image-03"
        document.getElementById("lannister").style.display = "block";
        document.getElementById("tyrell").style.display = "none";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("stark").style.display = "none";
        document.getElementById("tully").style.display = "none";
        document.getElementById("baratheon").style.display = "none";
	} else if (randomNumber == 4) {
        el.className = "random-image-04"
        document.getElementById("stark").style.display = "block";
        document.getElementById("tyrell").style.display = "none";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("lannister").style.display = "none";
        document.getElementById("tully").style.display = "none";
        document.getElementById("baratheon").style.display = "none";
    } else if (randomNumber == 5) {
        el.className = "random-image-05"
        document.getElementById("tully").style.display = "block";
        document.getElementById("tyrell").style.display = "none";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("stark").style.display = "none";
        document.getElementById("lannister").style.display = "none";
        document.getElementById("baratheon").style.display = "none";
    } else {
        el.className = "random-image-06"
        document.getElementById("baratheon").style.display = "block";
        document.getElementById("tyrell").style.display = "none";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("stark").style.display = "none";
        document.getElementById("tully").style.display = "none";
        document.getElementById("lannister").style.display = "none";
    }
}


