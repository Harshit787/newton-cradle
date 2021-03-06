const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roofObject;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var bobDiameter = 2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(400,200,600,50);
	
	bobObject1 = new bob(100,500,75);
	bobObject2 = new bob(250,500,75);
	bobObject3 = new bob(400,500,75);
	bobObject4 = new bob(550,500,75);
	bobObject5 = new bob(700,500,75);

	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*3,0)
	rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
	rope3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
	rope4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
	rope5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Engine.update(engine);

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}



