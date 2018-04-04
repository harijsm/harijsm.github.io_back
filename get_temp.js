var response = [];

function getDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = dd + '.' + mm + '.' + yyyy;
	return today;
}

var date = getDate();

var file = "/assets/temperature_logs/temp_"+date+".txt";

function csvJSON(csv){
	var lines=csv.split("\n");
	var result = [];
	var headers=["date", "temp"];

	for(var i=1;i<lines.length;i++) {

		var obj = {};
		var currentline=lines[i].split(";");

		if(typeof currentline[headers.length-1] != 'undefined') {
			for(var j=0;j<headers.length;j++){
				obj[headers[j]] = currentline[j];
			}
			result.push(obj);
		}
	}

	return JSON.stringify(result);
}

function readCSV() {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function() {
		if(rawFile.readyState === 4) {
			if(rawFile.status === 200 || rawFile.status == 0) {
				response = csvJSON(rawFile.responseText);
			}
		}
	}
	rawFile.send(null);
}