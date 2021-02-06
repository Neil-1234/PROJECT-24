class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':3.0
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
      fill("brown");
      ellipseMode(CENTER);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };