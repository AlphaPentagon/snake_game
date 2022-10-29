/* 

Plan

Create canvas ✅
Create and draw the snake
    snake length
    snake x
    snake y
Create controls to move snake
    up, down, left, right
Collision detection
    if hits itself then game over
    if hits wall then comes out at the other side of the canvas
*/

"use strict";

let canvas;
let canvasContext;

let snakeWidth;
let snakeHeight;
let snakeX;
let snakeY;

let snakeSpeed;
let snakeDirection = "right";

// when the browser loads run the init function
window.onload = init;

function init() {
  // canvas variables
  canvas = document.querySelector("#canvas");
  if (canvas.getContext) {
    canvasContext = canvas.getContext("2d");
  }

  // snake variablesa
  snakeWidth = 200;
  snakeHeight = 20;
  snakeX = canvas.width / 2 - snakeWidth / 2;
  snakeY = canvas.height / 2 - snakeHeight;
  snakeSpeed = 0.5;

  // run the controls function to listen for key presses
  controls();

  // Start the first frame request
  window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
  draw();
  // Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
}

function draw() {
  //create the canvas
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  //create the snake
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);

  //move the snake
  snakeMove(snakeDirection);
}

function controls() {
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "w":
        snakeDirection = "up";
        break;
      case "s":
        snakeDirection = "down";
        break;
      case "a":
        snakeDirection = "left";
        break;
      case "d":
        snakeDirection = "right";
        break;
    }
  });
}

function snakeMove(snakeDirection) {
  console.log(snakeDirection);
  switch (snakeDirection) {
    case "up":
      snakeY -= snakeSpeed;
      break;
    case "down":
      snakeY += snakeSpeed;
      break;
    case "left":
      snakeX -= snakeSpeed;
      break;
    case "right":
      snakeX += snakeSpeed;
      break;
    default:
      snakeX += snakeSpeed;
  }
}
