const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function writeHello() {
  clearCanvas();
  resizeCanvas(300,500);
  ctx.font = "30px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText("Hello", 50, 100);
}

function writeWorld() {
  clearCanvas();
  resizeCanvas(350,400);
  ctx.font = "30px Arial";
  ctx.fillStyle = "green";
  ctx.fillText("World", 200, 100);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function resizeCanvas(x,y) {
  canvas.height = x;
  canvas.width = y;
}