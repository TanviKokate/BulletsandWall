var bullet, speed, weight;
var wall, thickness;

function setup(){
  createCanvas(1000, 400);

  thickness = random(22, 83);
  speed = random(232 , 321);
  weight = random(30 ,52);
  
  bullet = createSprite(500, 200, 50, 7);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(800, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80)
}

function draw(){
  background(85, 95, 255);
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage  = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if (damage > 10){
      wall.shapeColor = color(255, 0, 0 );
    }
    if (damage < 10){
      wall.shapeColor = color(0, 255, 0);
    } 
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge >= wallLeftEdge){
      return true;
    }
    return false;
}