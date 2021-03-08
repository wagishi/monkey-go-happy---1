
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400)
  
  // creating a monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.15
  
  //creating the ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  invisibleGround = createSprite(10,355,300,10);
  invisibleGround.visible = false;
  
  roof = createSprite(10,60,300,10);
  roof.visible = false;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
background("white");
  
  ground.x = ground.width/2;
  
  if(keyDown("space")){
    monkey.velocityY = -12; 
  }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  monkey.collide(invisibleGround);
  monkey.collide(roof);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = survivalTime+Math.round(frameCount/60)
  text("Survival Time : "+survivalTime,100,50);
  
  
  drawSprites();
  
  bananaSprite();
  
  obstacles();

}
  function bananaSprite(){
    if (frameCount % 80 === 0){
   var banana = createSprite(400,165,10,40);
   banana.velocityX = -6;
   banana.addImage ("fruit",bananaImage);
   banana.scale=0.12
   banana.lifetime= 98;
   banana.y = Math. round(random(120,200))
   bananaGroup.add(banana);
  }
  }
 
  function  obstacles(){
  if (frameCount % 300 === 0){
  var obstacle = createSprite(400,300,40,40);
  obstacle.velocityX = -8
  obstacle.addImage("cactus",obstaceImage);
  obstacle.lifetime = 98 ;
  obstacle.scale = 0.26
  obstaclesGroup.add(obstacle);
  obstacle.setCollider("circle",0,0,200);
  }
  }

