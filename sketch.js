var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 20, 30);
  bullet.shapeColor = color(255);
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(23,83);
}

function draw() {
  background(0);  

  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage>10) {
      wall.shapeColor = color(255,0,0);
    }

    if (damage<10) {
      wall.shapeColor = color (0,255,0);
    }

  }

  drawSprites();
}

function hasCollided(Lbullet,Lwall) {
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;

  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;

}
