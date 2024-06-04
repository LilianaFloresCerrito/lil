
var trex ,trex_running;
var ground , groundimage,invisibleGround;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

  groundimage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)

  
  //crear sprite de Trex
 trex= createSprite(50,160,20,50);
 trex.x=50

 //tamaño de trex
 trex.scale = 0.5;
 trex.addAnimation("running",trex_running);
 //suelo
 ground = createSprite(200,180,400,20);
 ground.addImage(groundimage);
 ground.velocityX = -5;
 invisibleGround = createSprite(200,190,400,10);
}

function draw(){
  background("white")
if (keyDown("space"))
{
  trex.velocityY= -10;
}
trex.velocityY = trex.velocityY +0.5;
trex.collide(invisibleGround);
drawSprites();
}
