var car = document.getElementById("car-avatar");
car.style.left = "0px";

function move(leftOrRight) {
	car.style.left = parseInt(car.style.left) + Math.sign(leftOrRight)*5 + "px";
}

document.body.onkeydown = function(e){
  key = e.keyCode || e.charCode|| e.which;
  if (key === 37) {
  	move(-1);
  }
	else if (key === 39) {
		move(1);
	}
	else {
		return;
	}
}