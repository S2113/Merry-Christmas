class Snow
{

constructor()

{


this.image = loadImage ("snow.png");
this.body=Bodies.circle (random(20,1450),random(0,20),10);


World.add (world,this.body);
}

display ()
{

  
   imageMode(CENTER);
  
   
      image (this.image,this.body.position.x,this.body.position.y,20,20);
      

    



}








}