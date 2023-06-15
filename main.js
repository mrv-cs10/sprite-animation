// Title

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1600;
cnv.height = 800;

// Load Image
let player = document.getElementById("player-img");

let gameFrame = 0;
let spriteFrame = 0;
let keyPressed = false;
let playerX = 0;

// Animation Loop
requestAnimationFrame(animate);

function animate() {
  // UPDATE
  if (keyPressed) {
    playerX += 5;
  }

  if (gameFrame % 5 === 0) {
    spriteFrame++;
    if (spriteFrame > 5) {
      spriteFrame = 0;
    }
  }

  // DRAW
  ctx.clearRect(0, 0, cnv.width, cnv.height); // Clear Background

  ctx.drawImage(player, 0, 0);

  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, 1536, 256);

  ctx.strokeStyle = "red";
  ctx.strokeRect(spriteFrame * 256, 0, 256, 256);

  ctx.drawImage(player, spriteFrame * 256, 0, 256, 256, playerX, 256, 256, 256);

  // LOOP
  console.log(gameFrame);
  gameFrame++;
  requestAnimationFrame(animate);
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler() {
  keyPressed = true;
}

document.addEventListener("keyup", keyupHandler);

function keyupHandler() {
  keyPressed = false;
}
