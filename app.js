 var radius = 80;
    var point_size = 2;
    var center_x = 350;
    var center_y = 150;

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    function drawCircle() {
        ctx.beginPath();
        ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function drawPoint(angle) {
        var x = center_x + radius * Math.cos(-angle * Math.PI / 180);
        var y = center_y + radius * Math.sin(-angle * Math.PI / 180);

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

    //Execution
        drawCircle();
        var Angle = 0;

    function draw() {
        ctx.clearRect(0, 0, 500, 500);
        drawCircle();
        drawPoint(Angle);
        Angle += 0.5;
        window.requestAnimationFrame(draw);
    }
    draw();
    //window.requestAnimationFrame(draw);
    //we keep increasing the angle in an interval and point moves in 