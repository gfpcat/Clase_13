
var trex, trex_running;
var ground, groundimg;
var invisbleGround;
var clouds, cloudsImg;
var obstacles, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score=0;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimg = loadImage("ground2.png");
  cloudsImg= loadImage("cloud2.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  //crear sprite del t-rex.
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundimg);
  edges = createEdgeSprites();

  invisbleGround = createSprite(200,190,400,10);
  invisbleGround.visible = false;

  var rand = Math.round(random(10,60));
  console.log(rand);


}

function draw() {
  background("white")
  text("puntuacion: "+score,500,50);
  score=score+Math.round(getFrameRate()/60);
//console.log(trex.y);
  if (keyDown("space") && trex.y >= 161) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;

  ground.velocityX = -2;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisbleGround);

  spawnClouds();

  spawnObstacles();
  //0 derecha
  //1 izquierda
  //2 arriba
  //3 abajo

  drawSprites();
}

function spawnClouds(){
  if(frameCount%60===0){
    clouds=createSprite(600,100,40,10);
    clouds.addImage(cloudsImg);
    clouds.y=Math.round(random(10,60));
    clouds.scale=0.6;
clouds.velocityX=-4;
clouds.depth=trex.depth;
trex.depth=trex.depth+1;

clouds.lifetime = 160;
  }
}

function spawnObstacles(){
if(frameCount%60===0){
  obstacles=createSprite(600,165,10,40);
  obstacles.velocityX=-5;
var rand=Math.round(random(1,6));
switch(rand){
  case 1:obstacles.addImage(obstacle1);
  break;
  case 2:obstacles.addImage(obstacle2);
  break;
  case 3:obstacles.addImage(obstacle3);
  break;
  case 4:obstacles.addImage(obstacle4);
  break;
  case 5:obstacles.addImage(obstacle5);
  break;
  case 6:obstacles.addImage(obstacle6);
  break;
  default:break;

}
obstacles.scale=0.5;
obstacles.lifetime=600/5;
}
  
}