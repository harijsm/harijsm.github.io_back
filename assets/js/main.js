console.log('JS');

var CHECK_URL        = "http://home.atradi.es/check.txt",
	REDIRECT_URL     = "http://atradi.es/txt/";

function checkLocal(symbol) {
	console.log(window.location);
}

$('document').ready(function() {
	checkLocal(times);
});