
var monkey , monkey_running;
var banana_ob ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground,ground_v2;
var survivalTime = 0;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,300);
  
  monkey = createSprite(50,230,10,10)
  monkey.addAnimation("running_monkey",monkey_running);
  monkey.scale = 0.1;
  monkey.velocityY = 10;
  
  ground = createSprite(300,260,600,5);
  ground.shapeColor = "Green";
  ground.velocityX = -3;
  
  
  ground_v2 = createSprite(300,281,600,38);
  ground_v2.shapeColor = rgb(139,69,19);
  ground_v2.velocityX = -3;
  
 // monkey.debug = true;
  
    FoodGroup = createGroup(); 
    obstacleGroup = createGroup();

}


function draw() {
  background("white"); 
   
  console.log(frameCount);
  
  if(keyDown("space")&&monkey.y >= 225){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  
  ground.x = ground.width/2;
  ground_v2.x = ground_v2.width/2;
 
  
  monkey.collide(ground);
  //monkey.collide(obstacleGroup);
  
  if(monkey.isTouching(FoodGroup)){
    score = score+1;
    FoodGroup.destroyEach();
  }
  
    
  survivalTime = ceil(frameCount/frameRate());
  textSize(20);
  stroke("black");
  text("Survival Time: "+ survivalTime,220,50,fill("black"));
  
  textSize(15)
  text("Score: "+score,520,50);
  
  
 if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    ground.velocityX = 0;
    ground_v2.velocityX = 0;
  }
  

  banana();
  obstacle();
  drawSprites();
}

function banana(){
  if(frameCount%80 == 0){
  banana_ob = createSprite(610,round(random(120,200),10,10))
  banana_ob.addImage("banana",bananaImage);
  banana_ob.scale = 0.1;
  banana_ob.velocityX = -5;
  banana_ob.lifetime = width/-5;
  FoodGroup.add(banana_ob);
  }
}
function obstacle(){
  if(frameCount%300 == 0){
    obstacle_ob = createSprite(610,230,10,10)
    obstacle_ob.addImage("obsatcle",obstaceImage);
    obstacle_ob.scale = 0.2;
    obstacle_ob.velocityX = -5;
    obstacle_ob.lifetime = width/-5;
    //obstacle_ob.debug = true;
    obstacle_ob.setCollider("circle",0,0,150);
     
 
    obstacleGroup.add(obstacle_ob);
    
    
  }
}




