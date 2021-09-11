class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.9,
      length: 450,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  fly(){
    this.rope.bodyA=null
  }
    
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();

      //set the value of stroke to hide the rope
      stroke(123,202,242);
      strokeWeight(4);

    //  line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
}
