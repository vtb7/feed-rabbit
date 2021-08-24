var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var apple
var orangeleaf
var orangeImg
var leaf
var leafImg
var redleaf
var redImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png")
  leafImg = loadImage("leaf.png")
  redImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
//create apple

}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples();
  createOrangeLeaf()
  createLeaf()
  createredLeaf()
  drawSprites();
}
function createApples() {
  if (frameCount % 80 === 0){
 apple=createSprite(50,50,30,30);
 apple.addImage(appleImg)
 apple.x = Math.round(random(10,400))
 apple.lifetime = 200
 apple.scale=0.1
 apple.velocityY=4
  }
}
function createOrangeLeaf() {
 if(frameCount % 80 === 0){
orangeleaf=createSprite(100,100,30,30)
orangeleaf.addImage(orangeImg)
orangeleaf.x = Math.round(random(10,400))
orangeleaf.lifetime = 200
orangeleaf.scale=0.1
orangeleaf.velocityY=4
 }

}
function createLeaf() {
 if(frameCount % 80 === 0){
leaf=createSprite(200,200,30,30)
leaf.addImage(leafImg)
leaf.x = Math.round(random(10,400))
leaf.lifetime = 200
leaf.scale = 0.1
leaf.velocityY=4
 }



}
function createredLeaf() {
  if(frameCount % 80 === 0){
    redleaf=createSprite(200,200,30,30)
    redleaf.addImage(redImg)
    redleaf.x = Math.round(random(10,400))
    redleaf.lifetime = 200
    redleaf.scale = 0.1
    redleaf.velocityY=4






  }





}
var select_sprites = Math.round(random(1,2));
if(frameCount % 80 == 0) {
 if(select_sprites == 1) {
  createApples()
 }
   else{
  createOrangeLeaf()
}
   
}
