var garden,rabbit;
var gardenImge,rabbitImge;
var apple;
var appleImage;
var leaf;
var leafeImage;
var apple= math.round(random(1,2));
function preload(){
  gardenImage = loadImage("garden.png");
  rabbitImage = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage =loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImage);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImage);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  if(frameCount%80==0){
  createApples();
}
if(frameCount%80==0){
  createLeaves();
}
rabbit.x=World.mouseX
}
function createApples(){
apple=createSprite(random(50,350),40,10,10);
apple.addImage(appleImage);
apple.scale=0.06;
apple.velocityY=5;


}
function createLeaves(){
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImage);
  leaf.scale=0.06
  leaf.velocityY=3;
}