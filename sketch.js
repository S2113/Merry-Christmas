const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var world;
var engine;
var bg;

var snow1;


function preload()
{

bg=loadImage ("snow1.jpg");

}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

   engine=Engine.create();
   world=engine.world;

   snow1=new Snow ();


   Engine.run (engine);
}

function draw() {
  background(bg);  
  



   snow1.display ();

   drawSprites();

   
}

