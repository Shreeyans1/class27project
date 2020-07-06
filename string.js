class String{
    constructor(body1,body2,offSetX,offSetY){
        this.offSetX = offSetX
        this.offSetY = offSetY
      var options = {
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offSetX,y:this.offSetY}
      }  
      this.chain = Matter.Constraint.create(options);
      World.add(world,this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position
        console.log(pointA);
        var pointB = this.chain.bodyB.position
        console.log(pointB);
        strokeWeight(4);
        var a1x = pointA.x
        var a1y = pointA.y
        var a2x = pointB.x+this.offSetX
        var a2y = pointB.y+this.offSetY
        line(a1x,a1y,a2x,a2y);
    }
} 