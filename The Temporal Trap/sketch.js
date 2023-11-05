const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var brickImg,brick 
var compyImg,compy
var groundImg,ground
var marioJumpImg,marioJump
var backgroundImg,background
var raptorImg,raptor
var mario,marioImg


function preload (){

brickImg = loadImage("./assets/brick.png");
compyImg = loadImage("./assets/compy.jpeg");
groundImg = loadImage("./assets/ground.jpeg");
marioJumpImg = loadImage("./assets/Imported piskel.gif");
backgroundImg = loadImage("./assets/jurassic background.jpeg");
raptorImg = loadImage("./assets/raptor.png");
marioImg = loadImage ("./assets/sprite_0-removebg-preview.png")
}

function setup (){
 createCanvas(1900,1000)
  background(0)
  image(backgroundImg,0,0,1900,1000)

 
 //compy 
 mario = new Mario (700,800,10,0.3)
 display()
 //mario = createSprite (700,800)
 //mario.addImage(marioImg)
 //mario.scale = 0.3
 //mario.gravity = 0.3
 if (keyIsDown (RIGHT_ARROW)){
  mario.speed += 0.3
 }


 marioJump = marioJumpImg
 background = backgroundImg
 raptor = raptorImg
}
function draw (){
  createBricks()
  mario.display()
  //drawSprites() 
}

function createBricks(){
  if(frameCount % 60 === 0){
  brick = createSprite (900,700,100,50)
   brick.addImage(brickImg)
   brick.scale = 0.2
  }
}