function dots() {
	var time = 1000;
	var time_int = 1000;
	var $item = $('.home .cover h2');
	setTimeout(function(){ $item.html('.'); }, time);
	time += time_int;
	setTimeout(function(){ $item.html('..'); }, time);
	time += time_int;
	setTimeout(function(){ $item.html('...'); }, time);
	time += time_int;
	setTimeout(function(){ $item.html('....'); }, time);
	time += time_int;
	setTimeout(function(){ $item.html('.....'); }, time);
	time += time_int;
	setTimeout(function(){ $item.html('....'); }, time);
	time += time_int;
	setTimeout(function(){ $item.html('...'); }, time);
	time += time_int;
	setTimeout(function(){ $item.html('..'); }, time);
	time += time_int;
	setTimeout(function(){ $item.html('.'); }, time);
	time += time_int;
	setTimeout(function(){ $item.html('&nbsp;'); }, time);

	setTimeout(function(){ dots(); }, time);
}

$('document').ready(function() {
	dots();
});