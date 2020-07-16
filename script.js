let lastX, lastY;
let ctx;
let canvas = document.getElementById("canvas");

document.ontouchmove = function(e){ e.preventDefault()};

function InitThis() {
    canvas.width = document.body.getBoundingClientRect().width;
    canvas.height = document.body.getBoundingClientRect().height;

    ctx = document.getElementById('canvas').getContext("2d");

    $('#canvas').mousemove(function (e) {
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top);
    });
}

canvas.ontouchmove = function(event){
    event.preventDefault();
    let newx = event.touches[0].clientX;
    let newy = event.touches[0].clientY;
    ctx.lineTo(newx,newy);
}

canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);

function Draw(x, y) {
    // if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    // }
    lastX = x; lastY = y;
}

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

document.getElementById("top").addEventListener("click", function () {
    clearArea();
    console.log("Clicked border!");
});
