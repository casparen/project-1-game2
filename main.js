document.addEventListener('DOMContentLoaded', function () {



var body = document.querySelector('body');
var circle1 = document.getElementById('circle1');
// var circle2 = document.getElementById('circle2')
var marginH = 1;
var marginV = 1
var ballH = 1


var canvas = document.querySelector('#canvas')
var ballRadius = 10;
var circle2 = canvas.getContext("2d"); //define ball
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = 2;



// var one = document.getElementById('circle1');
// var style = one.currentStyle || window.getComputedStyle(one);
//
// display("Current marginLeft: " + style.marginLeft);







//if collapsed decrease ball size

function drawBall() {
 circle2.beginPath();
 circle2.arc(x, y, ballRadius, 0, Math.PI*2);
 circle2.fillStyle = "black";
 circle2.fill();
 circle2.closePath();
}

function draw() {
 circle2.clearRect(0, 0, canvas.width, canvas.height);
 drawBall();
 x+=dx;
 y+=dy;
 if(y + dy < 0) {
   dy = -dy;
 }
 if(y + dy > canvas.height) {
   dy = -dy;
 }
 if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
   dx = -dx;
 }
 if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
   dy = -dy;
 }
}

setInterval(draw, 10);

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;


    document.addEventListener('keydown', function (event) {
      // console.log(event.which);
      console.log(marginH);


          if(event.which === 39){ //right arrow
            marginH ++;
            document.getElementById("circle1").style.marginLeft = marginH + '5px';
          }


          if(event.which === 37){ //left arrow
            marginH --
            document.getElementById("circle1").style.marginLeft = marginH + '5px';
          }

          if(event.which === 40){//down arrow
          marginV ++;
            document.getElementById("circle1").style.marginTop = marginV + '5px';
          }
           if(event.which === 38){ // up arrow
                marginV --;
             document.getElementById("circle1").style.marginTop = marginV + '5px';
           }

          if(event.which === 18){ //alt, backspace

          }

    })
})


//test
//////////////////////////////////////////////////////
//   setInterval(moveBall,400);
//   function moveBall () {
//     for (var i = 0; i < 2; i++) {
//       ballH += i
//       var moveR = document.getElementById("circle2").style.marginLeft = ballH + '5px';
//       // if (moveR == '100px'){
//       // break;
//       // }
//     }
//   }
// }









//test 2
/////////////////////////////////////////////////////////////////////////////
// function drawBall() {
//      circle2.beginPath();
//      circle2.arc(x, 0, ballRadius, 0, Math.PI*2);
//      circle2.fillStyle = "black";
//      circle2.fill();
//      circle2.closePath();
// }
//
// function draw() {
//    circle2.clearRect(0, 0, canvas.width, canvas.height);
//    drawBall();
//    x+=dx;
//    // y+=dy;
//
//     var dx = 2;
//     // var dy = -2;
//     if (x + dx < 0){
//       dx = -dx;
//     }
//    if (x + dx > canvas.width || x + dx < ballRadius){
//      dx = -dx
//    }
//
//
//
//
// }
// setInterval(draw, 4);
