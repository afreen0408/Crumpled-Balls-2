
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,500,800,20);
	paper=new Paper(50,400,30);
	db1=new Dustbin(500,390,20,200);
	db2=new Dustbin(600,390,200,20);
	db3=new Dustbin(700,390,20,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  
 
  db3.display();
  db1.display();
  db2.addImg();
  drawSprites();
 
}
function keyPressed(){

	if (keyCode=== UP_ARROW)
{ 
Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-40})

}
}

