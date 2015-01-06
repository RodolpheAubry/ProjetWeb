var width= 500;
var height = 500;
var mouvement = 100;
var x = 200;
var y = 400;
var widthHamster = 100;
var heightHamster = 100;
var widthCookie = 30;
var heightCookie = 30;
var wpiege = 50;
var hpiege = 50;
var a = (Math.floor (Math.random() *5)*100+35);
var b  = 0;
var cookiesArr = new Array();

var petitCookieImg = new Image();
petitCookieImg.src = 'img/cookie.png';
cookiesArr.push(petitCookieImg);


function startGame() {
		setInterval(pluiedeCookie, 20);
		setInterval(spawnCookies, 1000);
}



function cookie(xPos, yPos, w, h) {
				this.xPos = xPos;
				this.yPos = yPos;
				this.w = w;
				this.h = h;
}

function spawnCookies() {
		allCookiesArr = new Array();
		var key = Math.floor(Math.random() * cookiesArr.length);
		var cookImg = cookiesArr[0];

		var newCookie = new Cookie(Math.floor (Math.random() *5)*100+35, 0, widthCookie, heightCookie);
		allCookiesArr.push(newCookie);
		alert(allCookiesArr[0]);
			}

function init() {
	
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

}
function pluiedeCookie(){
		for(i=0;i<allCookiesArr.length;i++) {
					if(allCookiesArr[i] != undefined) {
						var cook = allCookiesArr[i];
						cook.yPos += 10;
						context.drawImage(cook.xPos, cook.yPos, widthCookie, heightCookie,cook.image);
					}
				}

}

function placerHamster() {
	
	init();
	
	var imageObj = new Image();
	imageObj.src = 'img/hamster.png';
	imageObj.onload = function() {
		context.drawImage(imageObj,x,y,widthHamster,heightHamster);
	};

	window.addEventListener('keydown',deplacerHamster,true);

}



function placerPiege(a,b,wpiege,hpiege){
	
	init();	
	
	var imageObj = new Image();
	imageObj.src = 'img/trap.jpg';
	imageObj.onload = function() {
        context.drawImage(imageObj,a,b,wpiege,hpiege);
	};

}
function placerPetitCookie(a,b,widthCookie,heightCookie){	

	init();

	var imageObj = new Image();
	imageObj.src = 'img/cookie.png';
	imageObj.onload = function() {
        context.drawImage(imageObj,a,b,widthCookie,heightCookie);
 	};

 	setTimeout('deplacerCookie()', 80);

}

function miseajourCookie(a,b,widthCookie,heightCookie){
	
	init();
	
	var imageObj = new Image();
	imageObj.src = 'img/cookie.png';
	imageObj.onload = function() {
        context.drawImage(imageObj,a,b,widthCookie,heightCookie);
	};
 	
 	setTimeout('deplacerCookie()', 10);

}

function deplacerCookie(){

	if(b+1<height)
	{
	b = b+1;
	miseajourCookie(a,b,widthCookie,heightCookie);
	}
	
}

function deplacerHamster(e){

	switch (e.keyCode) {

		case 37:
		
	    if (x - mouvement > -widthHamster){
	    	clear();
	    	x = x-mouvement;
	   		placerHamster(x,y,widthHamster,heightHamster);
		}
	    
	    break;
	    
	    case 39:
	    
	    if (x + mouvement < width){
	    	clear();
	    	x = x+mouvement;
 			placerHamster(x,y,widthHamster,heightHamster);
	    }

 		break;
	}
	
}

function clear() {	
	context.clearRect(0, 0, width, height);
}