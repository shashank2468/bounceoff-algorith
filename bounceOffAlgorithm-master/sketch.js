var fixedRect, movingRect;
var object3,object4,object5;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";

 object3=createSprite(350,200,50,50);
 object3.shapeColor="yellow";

 object4=createSprite(300,50,50,50);
 object4.shapeColor="red";

 object5=createSprite(400,150,50,50);
 object5.shapeColor="blue";

   movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object3.velocityY=-6;
  object4.velocityX=6;
  object5.velocityY=-4;
}

function draw() {
  background(0,0,0);  
 bounceoff(object3,object4);
  drawSprites();
}