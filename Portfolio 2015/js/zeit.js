
/* ************************************** Die Zeit ********************************************
********************************************************************************************** */


		// Funktion um ein 0 an das Datum zu voranszustellen
function zweiStellen(s) {
        while (s.toString().length < 2) {
		s = "0" + s;
        }
        return s;
}

		//berechnet die differenz zwischen dem aktuellen Datum und dem der Erstellung
function rechner () { 
	var datum = new Date();
	var tag = zweiStellen(datum.getDate());
	var monat = zweiStellen(datum.getMonth() + 1);
	var jahr = datum.getFullYear();	
	var aktuell = tag + "." + monat + "." + jahr;
       	var datumEntwurf = new Date(2015,2,30);
	var tagEnt = zweiStellen(datumEntwurf.getDate());
	var monatEnt = zweiStellen(datumEntwurf.getMonth() + 1);
	var jahrEnt = datumEntwurf.getFullYear();
	var entwurf = tagEnt + "." + monatEnt + "." + jahrEnt;
	var diff = parseInt((datumEntwurf - datum) / 1000);
	var days = parseInt(diff / (60 * 60 * 24));		
		diff -= (days * 60 * 60 * 24);
                days *= -1;
                days = zweiStellen(days);
	var hours = parseInt(diff / (60 * 60));
		diff -= (hours * (60 * 60));
                hours *= -1;
	var minutes = parseInt(diff / 60);
		diff -= (minutes * 60);
                minutes *= -1;
	var seconds = parseInt(diff);
		diff -= (seconds);
                seconds *= -1;
	setTimeout(500);
		document.getElementById("zeit").innerHTML = "<p class='heute'>" +"Heute ist der : </br>" + aktuell + "</br>" + "</p>" + "<p class='zaehler'>"
		+"Die Site wurde am " + "</br>" +  tagEnt + "." + monatEnt + "." + jahrEnt +  "</br>" + " erstellt </br>" + "das ist jetzt genau </br>"
		+ days + " Tage</br>" +  hours + " Stunden</br>" + minutes + " Minuten</br>" +  seconds + " Sekunden" + "</p>";
	}
	
		// Aktualisiert die funktion jede sekunde
var aktiv = window.setInterval("rechner()", 1000);
