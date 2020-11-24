
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinob,paperob,groundob;
var world;

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

	dustbinob = new Dustbin(1000,650);
	paperob = new Paper(150,450,40);
	groundob = new Ground(width/2,670,width,20);
	

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbinob.display();
  paperob.display();
  groundob.display();
 
  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperob.body,paperob.body.position,{x:78,y:-78});
  
	}
}




