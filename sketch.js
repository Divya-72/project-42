var database;
var bg_img;
var gameState =0;
var playerCount = 0;
var spacecraft1,spacecraft2,spacecraft3,spacecraft4
var iss,spacebg
var spacecraft
var hasDocked=false





function preload(){
bg_img=loadImage("images/spacebg.jpg")
spacecraft_animation=loadAnimation("images/spacecraft1.png","images/spacecraft2.png","images/spacecraft3.png","images/spacecraft4.png")
spacecraft2_img=loadImage("images/spacecraft2.png")
spacecraft3_img=loadImage("images/spacecraft3.png")
spacecraft4_img=loadImage("images/spacecraft4.png")
spacecraft1_img=loadImage("images/spacecraft1.png")
iss_img=loadImage("images/iss.png")
}

function setup() {
  createCanvas(800,400);

  x=random(50,700);
y=random(300,390);

  //createSprite(400, 200, 50, 50);
  iss=createSprite(400,200,50,50);
  iss.scale=0.7
  iss.addImage(iss_img)
  spacecraft=createSprite(x,y);
  //spacecraft.addAnimation("working",spacecraft_animation)
  spacecraft.addImage(spacecraft1_img)
  spacecraft.scale=0.15

  taetae=createSprite(360,230,10,10);
  taetae.visible=false;
}


function draw() {
  background(bg_img);  
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      spacecraft.x-=10
      spacecraft.addImage(spacecraft3_img)
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x+=10
      spacecraft.addImage(spacecraft4_img)
    }
    if(keyDown(UP_ARROW)){
      spacecraft.y-=10
     // spacecraft.addImage(spacecraft4_img)
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.y+=10

      spacecraft.addImage(spacecraft2_img)
    }
  }

  if(spacecraft.isTouching(taetae)){
    hasDocked=true
    console.log(hasDocked)
    textSize(40);
    fill(255)
    stroke("white");
    strokeWeight(3);
    text("Docking Successful",300,350)
  }
  drawSprites();
}