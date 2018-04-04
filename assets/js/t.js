function checkT() {
	if(typeof response == 'undefined') {
		console.log("no response");
		return false;
	}
	
	return response;
}

function getLastT(data) {
	var json = JSON.parse(data);
	return json[json.length-1];
}

function getData() {
	console.log("fetching temp data...");
	
	readCSV();

	var data = checkT();

	if(data != false) {
		var lastT = getLastT(data);
		$("#lastTemp-temp").html(lastT['temp']+"<span class='small'>℃</span>");
		$("#lastTemp-date").html(lastT['date']);
	}
}

$('document').ready(function() {
	getData();

	window.setInterval(function(){
		getData();
	}, 20000);
});