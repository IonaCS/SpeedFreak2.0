var car = document.getElementById("car-avatar");
car.style.left = "0px";
car.style.top = "0px";

function moveHorizontal(leftOrRight) {
	car.style.left = parseInt(car.style.left) + Math.sign(leftOrRight)*5 + "px";
}

function moveVertical(upOrDown) {
	car.style.top = parseInt(car.style.top) + Math.sign(upOrDown)*5 + "px";
}

document.body.onkeydown = function(e){
  key = e.keyCode || e.charCode|| e.which;
  if (key === 37 && parseInt(car.style.left) > 0) {
  	moveHorizontal(-1);
  }
  else if (key === 38 && parseInt(car.style.top) > -350) {
		moveVertical(-1);
	}
	else if (key === 39 && parseInt(car.style.left) < 440) {
		moveHorizontal(1);
	}
	else if (key === 40 && parseInt(car.style.top) < 0) {
		moveVertical(1);
	}
	else {
		return;
	}
}