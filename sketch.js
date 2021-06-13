var PLAY1=1;
var PLAY2=2;
var END=4;
var gameState=PLAY1;

var maleZombies,maleZombiesI;
var maleZomiesGroup;

var femaleZombies,femaleZombiesI;
var femaleZombiesGroup;

var kunai,kunaiI;
var kunaiGroup;

var bone,boneI;
var boneGroup;

function preload(){
 //Image for level 1
  gateI=loadImage("image1/gate.png")
  dragonI=loadImage("image1/dragon.png")
  fireI=loadImage("image1/fire.png")
  ironmanI=loadImage("image1/iron man.png")
  pumpkinI=loadImage("image1/pumpkin.png")
  weaponI=loadImage("image1/w.png")
  brick=loadImage("image1/brick.JPG")
  backgroundI=loadImage("image1/background.jpg")
  startI=loadImage("image1/start.JPG")
  

  //image for level 2

  background2I=loadImage("image2/BG.png")
  SkeletonI=loadImage("image2/Skeleton.png")
  heroI=loadAnimation("image2/Run0.png","image2/Run1.png","image2/Run2.png","image2/Run3.png","image2/Run4.png","image2/Run5.png")
  heroIL=loadAnimation("image2/Run0L.png","image2/Run1L.png","image2/Run2L.png","image2/Run3L.png","image2/Run4L.png","image2/Run5L.png")

  maleZombiesI=loadAnimation("image2/MWalk (1).png","image2/MWalk (2).png","image2/MWalk (3).png","image2/MWalk (4).png","image2/MWalk (5).png")
  femaleZombiesI=loadAnimation("image2/Walk (1).png","image2/Walk (2).png","image2/Walk (3).png","image2/Walk (4).png","image2/Walk (5).png")

  kunaiI=loadImage("image2/kunai.png")

  winI=loadImage("image2/win.png")
  winnerI=loadImage("image2/winner.png")
}

function setup() {
  createCanvas(1100,625);
  // sprites for Level 1
Background=createSprite(650,150,10,10)
  Background.addImage(backgroundI)
  Background.scale=0.30

  gate=createSprite(80,128,10,10)
  gate.addImage(gateI)
  gate.scale=0.25
  
  ironman=createSprite(30,565,500,10)
  ironman.addImage(ironmanI)
  ironman.scale=0.15
  
  block=createSprite(180,500,10,10)
  block.addImage(brick)
  block.scale=0.50
  block2=createSprite(790,350,10,10)
  block2.addImage(brick)
  block2.scale=0.50
  block3=createSprite(250,200,10,10)
  block3.addImage(brick)
  block3.scale=0.50
  
  
  dragon=createSprite(200,50,10,10)
  dragon.addImage(dragonI)
  dragon.scale=0.20
  
  pumpkin=createSprite(300,300,10,10)
  pumpkin.addImage(pumpkinI)
  pumpkin.scale=0.10
  
  pumpkin2=createSprite(200,450,10,10)
  pumpkin2.addImage(pumpkinI)
  pumpkin2.scale=0.10
  
  
  edges=createEdgeSprites();
  
  pumpkin.velocityX=35
  pumpkin2.velocityX=30
  dragon.velocityY=2
  
  fire=createSprite(200,100,0.1,0.1)
  weapon=createSprite(30,360,0.1,0.1)
  
  start=createSprite(500,300,10,10)
  start.addImage(startI)
  start.scale=1.3


  //sprites for 2 Level
  Background2=createSprite(550,312,10,10)
  Background2.addImage(background2I)
  Background2.scale=0.55
  Background2.visible=false;
  
  skeleton=createSprite(1060,330,10,10)
  skeleton.addImage(SkeletonI)
  skeleton.scale=0.8
  skeleton.visible=false;

  Hero=createSprite(20,30,1,1);
  Hero.scale=0.2
  


  invisibleGround = createSprite(600,620,1200,50);
  invisibleGround.visible = false;
  invisibleGround2=createSprite(128,140,300,50)
  invisibleGround2.visible=false;
  invisibleGround3 = createSprite(465,165,280,50);
  invisibleGround3.visible = false;
  invisibleGround4 = createSprite(960,210,280,50);
  invisibleGround4.visible = false;
  invisibleGround5 = createSprite(710,380,760,50);
  invisibleGround5.visible = false;

  Win=createSprite(1000,580,1,1)
    Win.addImage(winI)
  Win.scale=1
  Win.visible=false
  winner=createSprite(480,220,1,1)
    winner.addImage(winnerI)
    winner.scale=0.6
    winner.visible=false



  maleZomiesGroup=createGroup();
femaleZomiesGroup=createGroup();
kunaiGroup=createGroup();


}

function draw() {

  background("white");
  drawSprites();

if (gameState===PLAY1){

  ironman.velocityX=0
  ironman.velocityY=0
  if(keyDown("s")){
    start.destroy()
  }
  
  ironman.collide(block)
  ironman.collide(block2)
  ironman.collide(block3)
  ironman.collide(edges)
  
  if(keyDown("up")){
    ironman.velocityY=-6
    ironman.rotation=0
  }
  if(keyDown("down")){
    ironman.velocityY=6
    ironman.rotation=180
  }
  if(keyDown("left")){
    ironman.velocityX=-6
    ironman.rotation=-90
  }
  if(keyDown("right")){
    ironman.velocityX=6
    ironman.rotation=90
  }
  
  pumpkin.bounceOff(edges)
  pumpkin2.bounceOff(edges)
  dragon.bounceOff(edges)
  dragon.bounceOff(block3)
  
  
  
if(ironman.y<190){
  fire.velocityX=12
  fire.addImage(fireI);
  fire.scale=0.15
  if(fire.x>1100){
    fire.x=180
      fire.y=100
  
}}
  
  
  if(fire.isTouching(ironman)){
    ironman.x=30 
    ironman.y=565
    
  }
  if(pumpkin.isTouching(ironman)){
    ironman.x=30 
    ironman.y=565
  }
  if(pumpkin2.isTouching(ironman)){
    ironman.x=30
    ironman.y=565
  }
  
  
  if(keyWentDown("space")){

    if(ironman.rotation==90){
      weapon.addImage(weaponI)
    weapon.scale=0.10
    weapon.velocityX=9
      weapon.x=ironman.x
    weapon.y=ironman.y
  } 
    if(ironman.rotation==-90){
      weapon.addImage(weaponI)
    weapon.scale=0.10
    weapon.velocityX=-7
      weapon.x=ironman.x
    weapon.y=ironman.y}
  }
  if(weapon.isTouching(dragon)){
    dragon.destroy()
  if(dragon.destroy){
    fire.destroy()
  }}
  if(weapon.isTouching(pumpkin)){
    pumpkin.destroy()
  }
  if(weapon.isTouching(pumpkin2)){
    pumpkin2.destroy()
  }
  
  if(ironman.isTouching(gate)){
    gameState=PLAY2
  }
   }  
    
    else if (gameState===PLAY2){
    
      Background.destroy();
      gate.destroy();
      block.destroy();
      block2.destroy();
      block3.destroy();
    
     Background2.visible=true;
     skeleton.visible=true;
    Win.visible=true;
    
     Hero.velocityX=0
     Hero.velocityY=0
     
     

    if(keyDown("left")){
      Hero.velocityX=-6
    }
    if(keyWentDown("left")){
      Hero.addAnimation("running",heroIL);
    }

    if(keyDown("right")){
      Hero.velocityX=6
    }
    if(keyWentDown("right")){
      Hero.addAnimation("running",heroI);
    }

    if(keyDown("up")) {
      Hero.velocityY = -20;

    }
  if (Hero.y<540){
    Hero.velocityY = Hero.velocityY + 5
  }
 


    Hero.collide(edges);
    Hero.collide(invisibleGround);
    Hero.collide(invisibleGround2);
    Hero.collide(invisibleGround3);
    Hero.collide(invisibleGround4);
    Hero.collide(invisibleGround5);
     

    if(kunaiGroup.isTouching(maleZomiesGroup)){
      maleZomiesGroup.destroyEach();
      kunaiGroup.destroyEach();
  }
  if(kunaiGroup.isTouching(femaleZomiesGroup)){
    femaleZomiesGroup.destroyEach();
    kunaiGroup.destroyEach();
  }
  if(maleZomiesGroup.isTouching(Hero)){
    Hero.x=20
    Hero.y=30
  }
  if(femaleZomiesGroup.isTouching(Hero)){
    Hero.x=20
    Hero.y=30
  }



    spawnMaleZombies();
    spawnfeMaleZombies();

   if (keyWentDown("space")){
    spawnKunai();
   }
 
   
  
  if (Hero.isTouching(Win)){
    winner.visible=true
  }}
    
  
  function spawnMaleZombies() {
    
    if (frameCount % 97 === 0 && gameState===PLAY2) {
      maleZombies=createSprite(1050,540,5,5);
      maleZombies.addAnimation("running",maleZombiesI)
      maleZombies.scale=0.2
      maleZombies.velocityX=-8
      
      maleZombies.lifetime = 250;
  
    maleZomiesGroup.add(maleZombies);

}}

function spawnfeMaleZombies() {
    
  if (frameCount % 139 === 0 && gameState===PLAY2) {
    femaleZombies=createSprite(1050,540,5,5);
    femaleZombies.addAnimation("running",femaleZombiesI)
   femaleZombies.scale=0.2
   femaleZombies.velocityX=-8
    
  femaleZombies.lifetime = 250;

  femaleZomiesGroup.add(femaleZombies);

}}

function spawnKunai(){
  if (frameCount % 1===0){
  kunai=createSprite(Hero.x,Hero.y,1,1)
  kunai.addImage(kunaiI)
kunai.scale=0.4
  kunai.velocityX=8;
  kunai.x=Hero.x
  kunai.y=Hero.y

  kunai.lifetime=100;
  kunaiGroup.add(kunai);
}}
}
