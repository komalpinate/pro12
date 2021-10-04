var jaxon, jaxon_2
var path, path_moving
var coin
var power
var bomb
var enenrgydrink
var invisibleboundary
var invisibleboundary2

function preload(){
 // pre-load images
  jaxon_2=loadAnimation("runner-1.png","runner-2.png")
  path_moving=loadImage("path.png")
  coin=loadImage("coin.png")
  power=loadImage("power.png")
  enenrgydrink=loadImage("energyDrink.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
  path=createSprite(200,200,20,20)
  path.addImage("moving",path_moving)
  path.scale=0.5
  path.velocityY = 4
  invisibleboundary=createSprite(300,200,10,400)
  invisibleboundary.visible=false

  invisibleboundary2=createSprite(100,200,10,400)
  invisibleboundary2.visible=false
  jaxon=createSprite(220,200,30,30)
  jaxon.addAnimation("2",jaxon_2)
  jaxon.scale = 0.1
}

function draw() {
  background(0);
drawSprites()
if(keyDown("D")){
jaxon.velocityX = +3
}
if(keyDown("A")){
jaxon.velocityX = -3
}
if(path.y > 400){
  path.y = height/2
  
}
jaxon.collide(invisibleboundary)
jaxon.collide(invisibleboundary2)
}
