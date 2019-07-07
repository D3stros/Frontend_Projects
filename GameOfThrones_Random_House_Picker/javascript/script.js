function randomImage() {
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    var el = document.getElementById("random-image-container");
    if (randomNumber == 1) {
        el.className = "Targaryen";
        document.getElementById("targaryen").style.display = "block";
        let para = document.getElementById("house_text");
        para.innerText = "House" + " " + el.className;
       var allHouses = document.querySelectorAll("#tyrell, #lannister, #stark, #tully, #baratheon").forEach(el => {
           el.style.display = "none";
       });
       
    } else if (randomNumber == 2) {
        el.className = "Tyrell";
        document.getElementById("tyrell").style.display = "block";
        let para = document.getElementById("house_text");
        para.innerText = "House" + " " + el.className;
        var allHouses = document.querySelectorAll("#targaryen, #lannister, #stark, #tully, #baratheon").forEach(el => {
            el.style.display = "none";
        });
    } else if (randomNumber == 3) {
        el.className = "Lannister"
        document.getElementById("lannister").style.display = "block";
        let para = document.getElementById("house_text");
        para.innerText = "House" + " " + el.className;
        var allHouses = document.querySelectorAll("#tyrell, #targaryen, #stark, #tully, #baratheon").forEach(el => {
            el.style.display = "none";
        });
    } else if (randomNumber == 4) {
        el.className = "Stark"
        document.getElementById("stark").style.display = "block";
        let para = document.getElementById("house_text");
        para.innerText = "House" + " " + el.className;
        var allHouses = document.querySelectorAll("#tyrell, #lannister, #targaryen, #tully, #baratheon").forEach(el => {
            el.style.display = "none";
        });
    } else if (randomNumber == 5) {
        el.className = "Tully"
        document.getElementById("tully").style.display = "block";
        let para = document.getElementById("house_text");
        para.innerText = "House" + " " + el.className;
        var allHouses = document.querySelectorAll("#tyrell, #lannister, #stark, #targaryen, #baratheon").forEach(el => {
            el.style.display = "none";
        });
    } else {
        el.className = "Baratheon"
        document.getElementById("baratheon").style.display = "block";
        let para = document.getElementById("house_text");
        para.innerText = "House" + " " + el.className;
        var allHouses = document.querySelectorAll("#tyrell, #lannister, #stark, #tully, #targaryen").forEach(el => {
            el.style.display = "none";
        });
    }
}