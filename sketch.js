const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var world;
var engine;
var bg;

var snow=[];
var snowFight1Img;
var snowFight2Img;
var snowBallImg;

var snowFight1;
var snowFight2;
var snowBall;

function preload()
{

bg=loadImage ("snow1.jpg");
snowFight1Img=loadAnimation ("snowfight.gif");
snowFight2Img=loadAnimation ("snowfight1.gif");
snowBallImg=loadAnimation("snowBall.gif");
}
function setup() {
  createCanvas(1500,400);
  //createSprite(400, 200, 50, 50);

   engine=Engine.create();
   world=engine.world;

   snowFight1=createSprite(1300,300,20,20);
   snowFight1.addAnimation ('fight1',snowFight1Img);
   snowFight1.scale=0.8;
   snowFight2=createSprite (400,300,20,20);
   snowFight2.addAnimation ('fight2',snowFight2Img);
   snowFight2.scale =1.5;

   snowBall=createSprite (800,300,20,20);
   snowBall.addAnimation ('snowBall',snowBallImg);
   snowBall.scale=0.7;


   Engine.run (engine);
}

function draw() {
  background(bg);  
  
    snow.push (new Snow())

    for (var z=0;z<snow.length; z++)
    {
      
      snow[z].display ();
      
    }

  

   drawSprites();

   
}

