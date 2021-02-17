var harry;
var coin;

function preload()
{
	boy_running=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png")
	boy1=loadImage("boy1.png")
	boy2=loadImage("boy2.png")
	boy3=loadImage("boy3.png")
	boy4=loadImage("boy4.png")
    backgroundimg=loadImage("background.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
     harry=createSprite(50,height-150)
     harry.addAnimation("tem",boy_running)
     
  
}


function draw() {
 
  background(backgroundimg);
  
  drawSprites();
 
}



