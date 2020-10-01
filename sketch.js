var fr;
var mr;

function setup() {
  createCanvas(800,400);
fr = createSprite(400, 200, 50, 50);
mr = createSprite(420,300,50,50);
fr.shapeColor = "red"
mr.shapeColor = "red"
}

function draw() {
  background(0,0,0); 
  mr.y = mouseY
  mr.x = mouseX 
  if (mr.x-fr.x<fr.width/2+mr.width/2&&fr.x-mr.x<fr.width/2+mr.width/2&&mr.y-fr.y<fr.height/2+mr.height/2&&fr.y-mr.y<fr.height/2+mr.height/2){
    fr.shapeColor = "yellow"
    mr.shapeColor = "yellow" 
  }
  else {
    fr.shapeColor = "red"
mr.shapeColor = "red"
  }
  drawSprites();
}