function
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var imageObj = new Image();
imageObj.onload = function() {
        context.drawImage(imageObj, 310, 420,75,75);
 };
imageObj.src = 'img/hamster.png';