var REDIRECT = true;

function checkLocal() {
	var pathname = window.location.pathname;
	if(pathname != "/") {
		return false;
	}

	if(typeof response == 'undefined') {
		console.log("no response");
		return false;
	}
	
	if(REDIRECT) {
		console.log(response.url);
		window.location = response.url;
	}
}

$('document').ready(function() {
	checkLocal();
});