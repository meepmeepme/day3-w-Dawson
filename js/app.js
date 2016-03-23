var area;

var color = 'red';

function createpic () {
	document.getElementById(color).innerHTML = "";
	area = Math.round(Math.random()*5);
	switch(area) {
		case 0:
			color = 'red';
			break;
		case 1:
			color = 'orange';
			break;
		case 2:
			color = 'yellow';
			break;
		case 3:
			color = 'green';
			break;
		case 4:
			color = 'blue';
			break;
		case 5:
			color = 'violet';
			break;

	}

document.getElementById(color).innerHTML ="<img src='images/200.gif'>";
};