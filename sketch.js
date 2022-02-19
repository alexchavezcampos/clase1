var cajita;

function setup() {
  createCanvas(400,400);
  cajita= createSprite(200,200,10,10);
  cajita.shapeColor="green";
}

function draw() 
{
  background(30);
  if (keyIsDown(DOWN_ARROW))    
  {
   cajita.position.y=cajita.position.y+1;   
  }

  if (keyIsDown(UP_ARROW))    
  {
   cajita.position.y=cajita.position.y-1;   
  } 

  drawSprites();
  
}




