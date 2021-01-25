class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
   
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];

    this.visibility = 255;
    this.redbird = loadImage("sprites/bird.png");
    this.bluebird = loadImage("sprites/bluebird.png");
    this.yellowbird = loadImage("sprites/yellowbird.png");
  }

  display() {
   

    if (this.body.velocity.x > 10 && this.body.position.x > 200) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    for (var i = 0; i < this.trajectory.length; i++) {
      push();
      this.visibility -= 0.5;
      tint(255, this.visibility);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }

  }
  displayred() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.redbird, 0, 0, this.width, this.height);
    pop();
  }
  displayblue() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.bluebird, 0, 0, this.width, this.height);
    pop();
  }
  displayyellow() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.yellowbird, 0, 0, this.width, this.height);
    pop();

  }
}
