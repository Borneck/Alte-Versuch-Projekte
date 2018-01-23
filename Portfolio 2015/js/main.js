/* ********************************* Canvas ******************************
************************************************************************ */
window.onload = transparentPic;

/* ***** Script fuer Canvas bild ***** */

function transparentPic() {
	var bildobj = document.getElementById('bild').getContext('2d');
	var img = new Image();
	img.src = "image/sonne.png";
    img.onload = function() {
		bildobj.drawImage(img, 0, 0);
		setFill(bildobj, "#555555");
		bildobj.globalAlpha = 0.5;
		text(bildobj, 20, 130, "Web", "bold 140px Impact");
		text(bildobj, 150, 190, "Entwickler", "bold 40px Impact");
		bildobj.globalAlpha = 0.8;
		setLinearFill(bildobj, 460, 180, 700, 240, "white", "black");
		text(bildobj, 530, 150, "Bewerbung", "bold 80px Impact");
		
		
	
	}
}

function setFill(obj, col) {
   obj.fillStyle = col;
   obj.strokeStyle = col;
}

function text(obj, x, y, text, style) {
   if(style) obj.font = style;
   obj.fillText(text, x, y);
}

function setLinearFill(obj, col1x, col1y, col2x, col2y, col1, col2) {
   var gradient = obj.createLinearGradient(col1x, col1y, col2x, col2y);
   gradient.addColorStop(0, col1);
   gradient.addColorStop(1, col2); 
   obj.fillStyle = gradient;
}





/* ************************************** Formularueberpruefung ********************************************
********************************************************************************************** */

function pruefe() {
	var fehlerFeld = "";
	checkStrg();
		if (document.formular.email_001.value == "") {
			fehlerFeld = fehlerFeld + "Bitte erneut E-Mail adresse eingeben!\n";
			email_001.focus();
		}
			if (document.formular.email.value == "") {
			fehlerFeld = fehlerFeld + "Bitte geben Sie ihre E-Mail adresse ein!\n";
			email.focus();
		}
		if (document.formular.email.value != document.formular.email_001.value) {
			fehlerFeld = fehlerFeld + "E-Mail adressen stimmen nicht überein\n";
			email.focus()
		}
		if (document.formular.email.value.indexOf(".","@") == -1 || document.formular.email_001.value.indexOf(".","@") == -1) {
			fehlerFeld = fehlerFeld + "Keine gültige E-Mail, Bitte eingeben\n";
		}
		if (document.formular.nachname.value == "") {
			fehlerFeld = fehlerFeld + "Bitte geben Sie ihren Nachnamen ein!\n";
			nachname.focus();
		}
		if (fehlerFeld != ""){
			var ausgabe = "Bitte Eingaben Kontrollieren:\n\n";
			ausgabe = ausgabe + fehlerFeld;
			alert(ausgabe);
			return false;
		}
		if (!document.formular.checkbox.checked) {
			fehlerFeld = fehlerFeld + "Sie müssen Zuerst unsere AGB Lesen und Bestätigen!\n";
		}
		if (fehlerFeld != ""){
			var ausgabe = "Fehlende Angaben:\n\n";
			ausgabe = ausgabe + fehlerFeld;
			alert(ausgabe);
			return false;
		} 
	return true;
}

		//Überprüfung der strings das nur Buschstaben enthalten sind
function checkStrg() { 
	var eingabe, c, erlaubt = "abcdefghijklmnopqrstuvwxyzöäüß-", laenge; 
	eingabe = window.document.formular.nachname.value; 
	eingabe = eingabe.toLowerCase(); 
	laenge = eingabe.length; 
		for (c = 0; c < laenge; c++){ 
		d = eingabe.charAt(c); 
			if (erlaubt.indexOf(d) == -1){ 
			alert ("Geben Sie bitte nur Buchstaben ein"); 
			return false; 
			} 
		} 
}

		// Wechselt die Farbe der eingabefelder wenn etwas drinnen steht
function los() {
	var input = document.getElementsByTagName("input");
	for (var i = 0; i < input.length; i++){
		input[i].onkeyup = input[i].onkeydown = input[i].onkeypress = input[i].onchange =  function(){
			if (this.value === "") this.style.backgroundColor = "#DDD";
			else this.style.backgroundColor = "#FFF";
		};
		input[i].onchange();
	}
}








/* ************************************** CONTENT WECHSEL ********************************************
********************************************************************************************** */






