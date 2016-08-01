var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

//Draw first rectangle

context.beginPath();
context.rect(0,0,150,150);
context.fillStyle = 'blue';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'white';
context.stroke();

//Draw second rectangle

context.beginPath();
context.rect(150,0,150,150);
context.fillStyle = 'grey';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'white';
context.stroke();

//Draw third rectangle

context.beginPath();
context.rect(150,150,150,150);
context.fillStyle = 'maroon';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'white';
context.stroke();

//Draw fourth rectangle

context.beginPath();
context.rect(0,150,150,150);
context.fillStyle = 'aqua';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'white';
context.stroke();