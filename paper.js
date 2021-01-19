 class Paper
 {
     constructor (x,y,radius) 
     {
        var options =
        {
              isStatic:false,
              'restitution' :0.3,
              'friction': 0.5,
              'density':1.3 

        }

        this.body = Bodies.circle(x,y,radius,options);
        this.height = radius;
        

        this.image = loadImage("paper.png");
        World.add(world,this.body);
     }

  
 

 display()
 {
     ellipseMode(RADIUS);

     fill("yellow");

     imageMode(CENTER);
     image (this.image,400,640,50,50);




 };
}