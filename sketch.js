var database;
var gameState = 0;
var game1;
var form1;
var bgStart,bgPlay;
var player1;
var playerCount = 0;
var blast1,blast2,blast3,blast4,blast5,blast6,blast7;
var laserImg;
var spaceshipL,spaceshipR;




function preload(){
// The background for the Start,Play state 
bgStart = loadImage("images/titile 3.png")
bgPlay = loadImage("images/background img.jpg");

//laser = loadImage("images/laser bullets.jpg");

//spaceshipL = loadImage("images/spaceship for player1.png");
//spaceshipR = loadImage("images/spaceship for player2.png");

}
function setup() {

  createCanvas(1200,600);
  database = firebase.database();
  game1 = new Game();
  game1.getState();
  game1.start();
  
}

function draw() {

 if(playerCount === 2 ){
   game1.updateState(1);
 }
if(gameState === 1 ){
  clear();
  game1.play();
}





  drawSprites();
}