var car = document.getElementById("lady");
var roads = document.getElementsByClassName("road");
var objects = document.getElementsByClassName("object");

car.style.left = "0px";
car.style.top = "0px";

function moveHorizontal(leftOrRight) {
	car.style.left = parseInt(car.style.left) + Math.sign(leftOrRight)*20 + "px";
}

function moveVertical(upOrDown) {
	car.style.top = parseInt(car.style.top) + Math.sign(upOrDown)*20 + "px";
}

document.body.onkeydown = function(e) {
  key = e.keyCode || e.charCode|| e.which;
  if (key === 37 && parseInt(car.style.left) > 0) {
  	moveHorizontal(-1);
  } else if (key === 38 && parseInt(car.style.top) > -350) {
		moveVertical(-1);
	}	else if (key === 39 && parseInt(car.style.left) < 440) {
		moveHorizontal(1);
	}	else if (key === 40 && parseInt(car.style.top) < 0) {
		moveVertical(1);
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
  setInterval("spawnObject()", Math.floor(Math.random() * 3500) + 1000);
}
timer();