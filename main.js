const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function writeHello() {
  clearCanvas();
  ctx.font = "30px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText("Hello", 50, 100);
}

function writeWorld() {
  clearCanvas();
  ctx.font = "30px Arial";
  ctx.fillStyle = "green";
  ctx.fillText("World", 200, 100);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
