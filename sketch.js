var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score=0
var PLAY
var END
var gameState=PLAY

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500)
 
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
 
  
  ground=createSprite(300,350,1200,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)

  FoodGroup=new Group();
  obstacleGroup=new Group();
  
}
function draw() {
  background(255)
  
  
  if(keyDown("space")){
    monkey.velocityY=-14
  }
monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(monkey.isTouching(FoodGroup)){
    score=score+1
    FoodGroup.destroyEach();
  }
  
  spawnObstacles();
  spawnBanana();
  drawSprites();
  text("Score:"+score,300,20)
}
function spawnObstacles(){
  
   if(frameCount % 200 === 0) {
    var obstacle = createSprite(600,310,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6
     obstacle.addImage(obstacleImage)
     obstacle.scale=0.2
   }
}
function spawnBanana(){
  
   if(frameCount % 80 === 0) {
    var banana = createSprite(600,200,10,40);
    //obstacle.debug = true;
    banana.velocityX = -6
     banana.addImage(bananaImage)
     banana.scale=0.1
     FoodGroup.add(banana)
   }
}




