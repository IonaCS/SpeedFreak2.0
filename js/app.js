var car = document.getElementById("car-avatar");
car.style.left = "0px";

function moveLeft() {
	car.style.left = parseInt(car.style.left) -5 + "px";
}

function moveRight() {
	car.style.left = parseInt(car.style.left) +5 + "px";
}

document.body.onkeydown = function(e){
  key = e.keyCode || e.charCode|| e.which;
  if (key === 37) {
  	moveLeft();
  }
	else if (key === 39) {
		moveRight();
	}
	else {
		return;
	}
}