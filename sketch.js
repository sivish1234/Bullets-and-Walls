var bullet, wall;

var thickness, speed, weight; 

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(200,200,70,30);
  bullet.shapeColor = 'white';
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("black");
  bullet.velocityX = random(55,90);
  
  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10) {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10) {
      wall.shapeColor = color(0,255,0);
    }
  } 
    
    drawSprites();
  }

  function hasCollided() {
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
  
    if(bulletRightEdge >= wallLeftEdge) {
        return true;
    }
        return false;
  
  }