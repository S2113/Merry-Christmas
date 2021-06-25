class Snow
{

constructor()

{


this.image = loadImage ("snow.png");
this.body=Bodies.circle (random(20,780),random(0,20),10);


World.add (world,this.body);
}

display ()
{

  var snowCount=[]
  var snowPosition=[this.body.position.x][this.body.position.y];
   imageMode(CENTER);
  
    for (var z=0;z<snowPosition.length; z++)
    {
     
      var snow=snowCount.push (new Snow());
      console.log (snowPosition);

      snowPosition.push([snow.body.position.x][0], [snow.body.position.y][1]);
      image (this.image,snowPosition[z][0],snowPosition[z][1],20,20);
      

    }



}








}