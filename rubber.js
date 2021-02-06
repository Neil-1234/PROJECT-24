class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x, this.y, this.radius, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("green");
      ellipseMode(CENTER);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };