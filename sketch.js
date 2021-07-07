const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var tappu;
var groundIMG, ground;
var backIMG, background;

function preload(){
    groundIMG = loadImage("images/ground.jpg");
    backIMG = loadImage("images/background.jpg");
}

function setup(){
  var canvas = createCanvas(displayWidth,displayHeight);

  engine = Engine.create();

  world = engine.World();

  ground = createSprite(200,200,500,50);
  ground.addImage(groundIMG);

  background = createSprite();
  background.addImage(backIMG);

}

function draw() {
    Engine.update(engine);
    
    drawSprites();
}