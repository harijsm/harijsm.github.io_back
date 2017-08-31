console.log('Čau! Kā iet?');

var $item = $('.symbols-placeholder'),
	v = 0,
	time = Math.floor(Math.random()*(1500-300+1)+500),
	times = Math.floor(Math.random()*(200-20+1)+20),
	space = '&nbsp;',
	symbols = ['.', '*', '^', '!', '_', '+', '&', ',', '(', ')', '\\', '/'],
	same = false,
	symbol_colors = {
		'.'  : "#1E90FF",
		'*'  : "#CCDF32",
		'^'  : "#D197D9",
		'!'  : "#BED6FF",
		'_'  : "#7FB347",
		'+'  : "#E6DB74",
		'&'  : "#66CCB3",
		','  : "#79ABFF",
		'('  : "#D25252",
		')'  : "#66D9EF",
		'\\' : "#EFB571",
		'/'  : "#9CF828",
		'~'  : "#9CF828",
		'\"' : "#FF0000",
		'-'  : "#800080",
		'='  : "#006080",
		';'  : "#00FF00",
		'%'  : "#FF8080",
		'?'  : "#00D0D0",
		'}'  : "#D9E577",
		'{'  : "#FFFFFF"
	};

function addDots(dots, symbol, t) {
	var html = '';

	for (var a = dots; a > 0; a--) {
		if(!same) {
			var symbol = symbols[Math.floor(Math.random()*symbols.length)];
		}

		symbol = addColor(symbol);

		html += symbol+space;
	}

	if(html == '') {
		html = '&nbsp;';
	}

	setTimeout(function(){
		$item.html(html);
		fix_text_align();
	}, time*t);
}

function dots(times) {
	var symbol = symbols[Math.floor(Math.random()*symbols.length)];
	var dot = 1;

	for (var i = 1; i <= times; i++) {
		addDots(i, symbol, i);
		dot++;
	}

	for (var i = times-1; i >= 0; i--) {
		addDots(i, symbol, dot);
		dot++;
	}

	setTimeout(function(){ dots(times); }, (time*(times*2))+time);
}

function randomDots(times) {
	var i = Math.floor((Math.random() * times) + 1);
	addDots(i, null, 1);
	setTimeout(function(){ randomDots(times); }, time);
}

function addColor(symbol) {
	if(typeof symbol_colors[symbol] != 'undefined') {
		return symbol = '<span style="color: '+symbol_colors[symbol]+'">'+symbol+'</span>';
	}
	return symbol;
}

function addDot(html, symbol, i) {
	symbol = addColor(symbol);
	html += symbol+space;

	setTimeout(function(){
		$item.html(html);
		fix_text_align();
	}, time*i);

	return html;
}

function randomDotsLine(times) {
	var html = '';

	for (var i = 1; i <= times; i++) {
		var symbol = symbols[Math.floor(Math.random()*symbols.length)];
		html = addDot(html, symbol, i);
	}

	setTimeout(function(){ randomDotsLine(times); }, (time*(times*2))+time);
}

function fix_text_align() {
	if(window.placeholder_start_height < $item.height()) {
		$item.addClass('tal');
	} else {
		$item.removeClass('tal');
	}
}

$('document').ready(function() {
	var rand = Math.floor((Math.random() * 3) + 1);
	window.placeholder_start_height = $item.height();

	if(rand == 2) {
		dots(times);
	} else if (rand == 1) {
		randomDots(times);
	} else {
		randomDotsLine(times);
	}

	$('.home .number').html(rand+'.'+symbols.length+'.'+times+'.'+time);
});