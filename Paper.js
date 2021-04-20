class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.2,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
        
      World.add(world, this.body);
      }
    display(){
      ellipseMode(RADIUS);
  
      fill("cyan");
  
      circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };