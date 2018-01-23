window.onload = zeichnen;

function zeichnen() {
	var canvas = document.getElementById("canvasInit");
	if (canvas.getContext) {
		var context = canvas.getContext("2d");
			// Zeichne das A
			context.storkeStyle = "rgba(0,100,0, 1)";
			context.lineWidth = 3;
			context.beginPath();
			context.moveTo(10,90);
			context.lineTo(30,10);
			context.lineTo(40,10);
			context.lineTo(60,90);
			context.stroke();
			context.closePath();
			context.beginPath();
			context.moveTo(17.5,55);
			context.lineTo(52.5,55);
			context.stroke();
			context.closePath();
			// Zeichne den Punkt
			context.beginPath();
			context.fillStyle = "black";
			context.arc(70,87.5,2.5,0,2*Math.PI);
			context.fill();
			context.closePath();
			// Zeichne das B
			context.beginPath();
			context.moveTo(80,90);
			context.lineTo(80,10);
			context.lineTo(105,10);
			context.lineTo(115,20);
			context.lineTo(115,40);
			context.lineTo(105,50);
			context.lineTo(115,60);
			context.lineTo(115,80);
			context.lineTo(105,90);
			context.lineTo(80,90);
			context.stroke();
			context.closePath();
			// Zeichne das o
			context.beginPath();
			context.moveTo(130,90);
			context.lineTo(120,80);
			context.lineTo(120,70);
			context.lineTo(130,60);
			context.lineTo(140,60);
			context.lineTo(150,70);
			context.lineTo(150,80);
			context.lineTo(140,90);
			context.lineTo(130,90);
			context.stroke();
			context.closePath();
			// Zeichne das r
			context.beginPath();
			context.moveTo(155,90);
			context.lineTo(155,60);
			context.lineTo(165,60);
			context.lineTo(170,65);
			context.stroke();
			context.closePath();
			// Zeichne das n
			context.beginPath();
			context.moveTo(175,90);
			context.lineTo(175,60);
			context.stroke();
			context.closePath();
			context.beginPath();
			context.moveTo(175,65);
			context.lineTo(180,60);
			context.lineTo(190,60);
			context.lineTo(195,65);
			context.lineTo(195,90);
			context.stroke();
			context.closePath();
			// Zeichne das e
			context.beginPath();
			context.moveTo(220,90);
			context.lineTo(205,90);
			context.lineTo(200,85);
			context.lineTo(200,65);
			context.lineTo(205,60);
			context.lineTo(215,60);
			context.lineTo(220,65);
			context.lineTo(220,70);
			context.lineTo(215,75);
			context.lineTo(205,75);
			context.stroke();
			context.closePath();
			// Zeichne das c
			context.beginPath();
			context.moveTo(240,90);
			context.lineTo(230,90);
			context.lineTo(225,85);
			context.lineTo(225,65);
			context.lineTo(230,60);
			context.lineTo(240,60);
			context.stroke();
			context.closePath();
			// Zeichne das k
			context.beginPath();
			context.moveTo(245,90);
			context.lineTo(245,30);
			context.stroke();
			context.closePath();
			context.beginPath();
			context.moveTo(245,65);
			context.lineTo(260,50);
			context.stroke();
			context.closePath();
			context.beginPath();
			context.moveTo(260,90);
			context.lineTo(250,60);
			context.stroke();
			context.closePath();
			//Zeichne Smiley 
			context.beginPath();
			context.lineWidth = 2;
			context.fillStyle = "#FFFF00";
			context.arc(300,50,30,0,2*Math.PI);
			context.fill();
			context.closePath();
			context.beginPath();
			context.fillStyle = "black";
			context.arc(290,42.5,2.5,0,2*Math.PI);
			context.fill();
			context.closePath();
			context.beginPath();
			context.arc(310,42.5,2.5,0,2*Math.PI);
			context.fill();
			context.closePath();
			context.closePath();
			context.beginPath();
			context.moveTo(300,47.5);
			context.lineTo(300,57.5);
			context.stroke();
			context.closePath();
			context.beginPath();
			context.arc(300, 57.5, 12.5, 0, Math.PI, false);
			context.stroke();
			context.closePath();
	}
}