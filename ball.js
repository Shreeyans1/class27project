class Ball {
    constructor(x, y, radius) {
      var options = {
          isStatic:true,
          restitution:0.3,
          'friction':0.3,
          'density':1.0
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x, this.y, this.radius, options);
     
      
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);
      stroke("white")
      fill("red");
      
      ellipse(0, 0, this.radius,this.radius);
      
      pop();
    }
  };