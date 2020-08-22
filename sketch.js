var car, wall;
var speed, weight;
var deform;
function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  deform = 0.5*weight*speed*speed/22500;

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  
  
}
function draw() {
  background(2,2,2); 

  wall.shapeColor=color(80,80,80);
  car.velocityX = speed;

  if(wall.x-car.x < (car.width + wall.width)/2){

      car.velocityX = 0;

      if(deform<100){
        car.shapeColor = "green";
      } 

      if((deform>100)&&(deform<180)){
        car.shapeColor = color(230,230,0);
      }

      if(deform>180){
        car.shapeColor = "red";
      }
    }
  drawSprites();
}