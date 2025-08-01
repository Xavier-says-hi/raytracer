console.log("Script 2 loaded!");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
});
function main() {
  clearCanvas();
  resizeCanvas(300,500);
  ctx.font = "30px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText("Hello", 50, 100);
}

function stop() {
  clearCanvas();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function resizeCanvas(x,y) {
  canvas.height = y;
  canvas.width = x;
}