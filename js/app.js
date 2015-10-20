var lady = document.getElementById("lady");
var roads = document.getElementsByClassName("road");
var objects = document.getElementsByClassName("object");
var score = 0;
var randTime;

lady.style.left = "0px";
lady.style.top = "380px";

function moveHorizontal(leftOrRight) {
	lady.style.left = parseInt(lady.style.left) + Math.sign(leftOrRight)*20 + "px";
}

function moveVertical(upOrDown) {
	lady.style.top = parseInt(lady.style.top) + Math.sign(upOrDown)*20 + "px";
}

document.body.onkeydown = function(e) {
  key = e.keyCode || e.charCode|| e.which;
  if (key === 37 && parseInt(lady.style.left) > 0) {
  	moveHorizontal(-1);
  } else if (key === 38 && parseInt(lady.style.top) > 30) {
		moveVertical(-1)
	}	else if (key === 39 && parseInt(lady.style.left) < 440) {
		moveHorizontal(1)
	}	else if (key === 40 && parseInt(lady.style.top) < 380) {
		moveVertical(1)
	} else {
		return;
	}
}

function spawnObject() {
	var newObj = document.createElement("img");
	var occuranceChance = Math.floor(Math.random() * 5);
	if (occuranceChance >= 3) {
		newObj.className = "cocktail object";
		newObj.src = "img/cocktail.png";
	} else {
		newObj.className = "flasher object";
		newObj.src = "img/flasher.png";
	}
	newObj.style.left = Math.floor(Math.random() * 410) + "px";
	newObj.style.top = "0px";
	roads[0].appendChild(newObj);
}

function moveObjectDown() {
	for (var i=0; i<objects.length; i++) {
		objects[i].style.top = parseInt(objects[i].style.top) + 5 + "px";
		if (parseInt(objects[i].style.top) > 415) {
			roads[0].removeChild(objects[i]);
		}
	}
}

function timer() {
  setInterval("moveObjectDown()", 100);
  setInterval("detectCollision()", 100);
}
timer();

function spawnObjectTimer() {
	setInterval("spawnObject()", Math.floor(Math.random() * 3500) + 1000);
	setInterval("spawnObjectTimer()", 10000);
}
spawnObjectTimer();

function detectCollision() {
	var ladyX = parseInt(lady.style.left);
	var ladyY = parseInt(lady.style.top);
	for (var i=0; i<objects.length; i++) {
		var objX = parseInt(objects[i].style.left);
		var objY = parseInt(objects[i].style.top);
		var xDiff = Math.abs(ladyX - objX);
		var yDiff = Math.abs(ladyY - objY);
		var distance = Math.sqrt(
			Math.pow(xDiff, 2) +
			Math.pow(yDiff, 2)
		)
		var collisionDistance = 50;
		if (distance < collisionDistance) {
			if (objects[i].className === "flasher object") {
				flasherCollision();
			} else if (objects[i].className === "cocktail object") {
				cocktailCollision(objects[i]);
			}
		}
	}
}

function cocktailCollision(cocktail) {
	score += 10;
	roads[0].removeChild(cocktail);
}

function flasherCollision() {
	alert("Game over! Your score is: " + score);
	document.location.reload(true);
}