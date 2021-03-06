var bg,bgimg;
var harry,harryimg;
var covid,covidimg,covidgroup;
var ground;
var masks,masksimg,masksgroup;
var sanitizer,sanitizerimg,sanitizergroup;
var score=0;
var lifeCount=0;

function preload(){
bgimg=loadImage("bg.jpg");
harryimg=loadAnimation("Harry.gif");
covidimg=loadAnimation("covid.gif");
masksimg=loadAnimation("masks.gif");
sanitizerimg=loadAnimation("sanitizer.gif");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(650,400);
  bg.addImage(bgimg);
  bg.scale=5;
  bg.velocityX=-4;

  harry=createSprite(200,windowHeight-200,40,50);
  harry.addAnimation("running",harryimg);
  harry.scale=0.8;
  
  ground=createSprite(200,windowHeight-50,windowWidth,10);
  ground.visible=false;

  covidgroup=new Group();
  masksgroup=new Group();
  sanitizergroup=new Group();
}

function draw(){
  background(0);


  if(bg.x<530){
    bg.x=windowWidth/2+100;
  }

  if(keyDown("space")){
    harry.velocityY=-13;
  }

  harry.velocityY=harry.velocityY+0.8;

  harry.collide(ground)

  spawncovid();
  spawnmasks();
  spawnsanitizer();

  drawSprites();

  textSize(30);
  fill("black");
  text("Score: "+score,50,50);
  text("LifeCount: "+lifeCount,50,100);

}

function spawncovid(){
  if(frameCount%200===0){
    covid=createSprite(windowWidth+30,Math.round(random(windowHeight-550,windowHeight-500)));
    covid.addAnimation("moving",covidimg);
    covid.scale=0.3;
    covid.velocityX=-5;
    covid.lifetime=600;
    covidgroup.add(covid);
  }

  
}
function spawnmasks(){
  if(frameCount%400===0){
    masks=createSprite(windowWidth+10,Math.round(random(windowHeight-450,windowHeight-600)));
    masks.addAnimation("wear",masksimg);
    masks.scale=0.3;
    masks.velocityX=-6;
    masks.lifetime=600;
    masksgroup.add(masks);

  }
}
function spawnsanitizer(){
  if(frameCount%600===0){
    sanitizer=createSprite(windowWidth+60,Math.round(random(windowHeight-300,windowHeight-600)));
    sanitizer.addAnimation("use",sanitizerimg);
    sanitizer.scale=0.3;
    sanitizer.velocityX=-6;
    sanitizer.lifetime=600;
    sanitizergroup.add(sanitizer);
}

}