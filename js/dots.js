// ==========================================================
// Javascript for ball animations, credit to Dryden Williams, 
// visit his site here, http://www.drydenwilliams.co.uk/ 
//
// Slight modifications to color and canvas dimensions. 
//
// Check out his instagram too, he's actually quite handsome. 
// ========================================================== 



// Thanks to http://hakim.se/ for help with understanding particles

var dots = [],
	colors = [
		["#EF6C77", "#97CA56", "#AE83EE", "#49C4D8",]
	]
	random = colors[Math.floor(Math.random() * colors.length)],
	canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	$welcome = $(".hero-circle"),
	$down_arrow = $(".down-arrow circle, .down-arrow g polyline");

	$($welcome, $down_arrow).css("background-color", random[3]);
	$down_arrow.css( "stroke" , random[3] );

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

function DotConstructor(){
	self = this;
	this.x = [];
	this.radius = this.callRadius();
	for( var i = 0; i < 25; i++ ) {
		var color = null;
		if( Math.random() > 0.5){
			color = random[0];
		} else if ( Math.random() > 0.5){
			color = random[1];
		} else {
			color = random[2];
		}

		dots.push( {
			x: Math.random()* window.innerWidth,
			y:Math.random() * window.innerHeight,
			vx: Math.random(),
			vy: Math.random(),
			radius: Math.round(Math.random() * this.radius),
			color: color
		} );

	}
}

DotConstructor.prototype.changeColor = function(){
	var arr = [];
	var newColor = colors[Math.floor(Math.random() * colors.length)];
	for( var i = 0; i < dots.length; i++ ) {
		arr.push(dots[i].radius);
		if( dots[i].radius < Math.round(Math.random() * this.radius)){
			dots[i].color = newColor[0]
		} else if ( dots[i].radius > Math.round(Math.random() * this.radius)) {
			dots[i].color = newColor[1]
		} else {
			dots[i].color = newColor[2]
		}

	}
}

DotConstructor.prototype.initialize = function(){
	window.addEventListener('resize', this.resizeCanvas, false);
	setInterval( self.timeout, 40 );
	//setInterval( self.changeColor, 7000 );
	context.beginPath();
}

DotConstructor.prototype.timeout = function(){
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	self.move();
}

DotConstructor.prototype.move = function(){
	for( var i = 0; i < dots.length; i++ ) {
		dots[i].x += dots[i].vx; // dots[i].x = dots[i].x + dots[i].vx
		dots[i].y += dots[i].vy;


		if( dots[i].x + dots[i].radius > window.innerWidth ) {
			dots[i].vx = - 1 - Math.random();
		}
		else if ( dots[i].x - dots[i].radius < 0 ) {
			dots[i].vx = 1 + Math.random();
		}
		else {
			dots[i].vx *= 1 + Math.random() * 0.005;
		}

		if( dots[i].y + dots[i].radius > window.innerHeight ) {
			dots[i].vy = - 1 - Math.random();
		}
		else if ( dots[i].y - dots[i].radius < 0 ) {
			dots[i].vy = 1 + Math.random();
		}
		else {
			dots[i].vy *= 1 + Math.random() * 0.005;
		}

		context.beginPath();
		context.fillStyle = dots[i].color;
		context.beginPath();
		context.arc( dots[i].x , dots[i].y , dots[i].radius , 0 , Math.PI * 2 , true );
		context.closePath();
		context.fill();
	}
}

DotConstructor.prototype.resizeCanvas = function(e) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

DotConstructor.prototype.callRadius = function( ) {
	if( canvas.width <= 640 ){
		return 0;
	} else {
		return 100;
	}
}


var firstDots = new DotConstructor();
firstDots.initialize();
