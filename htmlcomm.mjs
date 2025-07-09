import { blue } from './test.mjs';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

export function main() {
  clearCanvas();
  resizeCanvas(300,500);
  ctx.font = "30px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText("Hello", 50, 100);
}

export function stop() {
  clearCanvas();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function resizeCanvas(x,y) {
  canvas.height = y;
  canvas.width = x;
}