const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world
var plinkos=[]
var divisions=[]
var div,plin,part
var particles
var gamestate="start"
var score=0
var count=0

function setup() {x
  createCanvas(810,800);

  engine = Engine.create();
  world = engine.world;

 for(var x=0; x<=800; x=x+80 ){
  div=new Ground(x,650,10,300)
  divisions.push(div)
 }
  ground=new Ground(400,795,8000,10)
}

function draw() {
  background("black");  
  drawSprites();

 
  if(particles!=null)
  {
    particles.display();
    if(particles.body.position.y>760)
    {
      if(particles.body.position.x<300){
        score=score+500;
        particles=null;
        if(count= 5)gamestate="end"
      }

      else if(particles.body.position.x < 600&& particles.body.x> 301){
      score=score+100
      particles=null
      if(count>=5)gamestate="end"
      }
      else if(particles.body.position.x < 900&& particles.body.x> 501){
        score=score+200
        particles=null
        if(count>=5)gamestate="end"
        }
        
    }
  }

  for(var k=0; k<divisions.length; k++){
    divisions[k].display()
  }
  ground.display()

  
}
function mousePressed()
{
  if(gameState!=="end"){
    count++
    particles=new Particle(mouseX,10,10,10)
  }
}