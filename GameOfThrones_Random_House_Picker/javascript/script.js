

function randomImage(){
    var randomNumber = Math.floor((Math.random() * 6) + 1);
	var el = document.getElementById("random-image-container");
	if (randomNumber == 1) {
    el.className = "Targaryen";
    document.getElementById("targaryen").style.display = "block";
    let para = document.getElementById("house_text");
    para.innerText = "House" + " "+ el.className;
    document.getElementById("tyrell").style.display = "none";
    document.getElementById("lannister").style.display = "none";
    document.getElementById("stark").style.display = "none";
    document.getElementById("tully").style.display = "none";
    document.getElementById("baratheon").style.display = "none";
	} else if (randomNumber == 2) {
        el.className = "Tyrell";
        let para = document.getElementById("house_text");
        para.innerText = "House" + " "+ el.className;
        document.getElementById("tyrell").style.display = "block";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("lannister").style.display = "none";
        document.getElementById("stark").style.display = "none";
        document.getElementById("tully").style.display = "none";
        document.getElementById("baratheon").style.display = "none";
	} else if (randomNumber == 3) {
        el.className = "Lannister"
        document.getElementById("lannister").style.display = "block"; 
        let para = document.getElementById("house_text");
        para.innerText = "House" + " "+ el.className;
        document.getElementById("tyrell").style.display = "none";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("stark").style.display = "none";
        document.getElementById("tully").style.display = "none";
        document.getElementById("baratheon").style.display = "none";
	} else if (randomNumber == 4) {
        el.className = "Stark"
        document.getElementById("stark").style.display = "block";
        let para = document.getElementById("house_text");
        para.innerText = "House" + " "+ el.className;
        document.getElementById("tyrell").style.display = "none";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("lannister").style.display = "none";
        document.getElementById("tully").style.display = "none";
        document.getElementById("baratheon").style.display = "none";
    } else if (randomNumber == 5) {
        el.className = "Tully"
        document.getElementById("tully").style.display = "block"; 
        let para = document.getElementById("house_text");
        para.innerText = "House" + " "+ el.className;
        document.getElementById("tyrell").style.display = "none";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("stark").style.display = "none";
        document.getElementById("lannister").style.display = "none";
        document.getElementById("baratheon").style.display = "none";
    } else {
        el.className = "Baratheon"
        document.getElementById("baratheon").style.display = "block";
        let para = document.getElementById("house_text");
        para.innerText = "House" + " "+ el.className;
        document.getElementById("tyrell").style.display = "none";
        document.getElementById("targaryen").style.display = "none";
        document.getElementById("stark").style.display = "none";
        document.getElementById("tully").style.display = "none";
        document.getElementById("lannister").style.display = "none";
    }
}


