 var radius = 80;
 var point_size = 2;
 var center_x = 100;
 var center_y = 100;
 var sine_x0 = 200;
 var sine_x1;
 var sine_y0;
 var sine_y1;
 var offset = 100;


 var c = window.document.getElementById("myCanvas");
 var ctx = c.getContext("2d");

 function drawCircle() {
     ctx.beginPath();
     ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
     ctx.stroke();
 }

 function drawPoint(angle) {
     var x = center_x + radius * Math.cos(-angle * Math.PI / 180);
     var y = center_y + radius * Math.sin(-angle * Math.PI / 180);
   
     sine_y0 = y;
     sine_x1 = sine_x0 + 0.2;
     sine_x0 += 0.2;
     sine_y1 = center_y + radius * Math.sin(-(angle + 0.2) * Math.PI / 180);
     ctx.beginPath();
     ctx.arc(x, y, point_size, 0, 2 * Math.PI);
     ctx.fillStyle = "#ff0000";

     ctx.fill();

     ctx.beginPath();
     ctx.moveTo(center_x, center_y);
     ctx.lineTo(x, y);
     ctx.stroke();
     ctx.closePath();

 }

 function drawSine() {
     ctx.beginPath();
     ctx.moveTo(sine_x0, sine_y0);
     ctx.lineTo(sine_x1, sine_y1);
     ctx.stroke();

 }

 //Execution
 drawCircle();
 var Angle = 0;

 function draw() {
     ctx.clearRect(0, 0, 200, 500);
     drawCircle();
     drawPoint(Angle);
     drawSine();
     Angle += 0.2;
     window.requestAnimationFrame(draw);
 }
 draw();
 //window.requestAnimationFrame(draw);
 //we keep increasing the angle in an interval and point moves in 
