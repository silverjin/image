var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var windowWidth = document.body.offsetWidth;
var windowHeight = document.body.offsetHeight;
var centerx = windowWidth/2;
var centery = windowHeight/2;
canvas.width = document.body.offsetWidth;
canvas.height = document.body.offsetHeight;
var mousex,mousey;

function init(){
  canvas.addEventListener("mousedown", function(e) {
    canvas.addEventListener('mousemove', draw, false);
    ctx.moveTo(e.clientX,e.clientY);
  });
  canvas.addEventListener("mouseup",function(e){
    canvas.removeEventListener('mousemove', draw, false);
  });
};//init()

function mousePosUpdate(e){
  mousex = e.clientX;
  mousey = e.clientY;
};//mousePosUpate();

function draw(e){
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.strokeStyle= "black";
  ctx.shadowColor= "black";
  ctx.shadowOffsetX=0;
  ctx.shadowOffsetY=0;
  ctx.shadowBlur=10;
  ctx.lineWidth = 25;
  ctx.lineJoin = ctx.lineCap = 'round';
};//draw()

window.onload = function(){
  init();
};//window.onload
