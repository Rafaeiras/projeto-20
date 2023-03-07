
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine 
var world
var block1, block2, block3


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var block1_options = {
		restituion:0.5,
		friction:0.02,
		frictionAir:0 
	}

	var block2_options = {
       restituion:0.7,
	   friction:0.01,
	   frictionAir:0.1

	}

	var block3_options = {
		restituion:0.01,
		friction:1,
		frictionAir:0.3
 
	 }

	
	 block1 = Bodies.circle(220,10,60,block1_options);
	World.add (world,block1);

	block2 = Bodies.rectangle(110,50,70,40,block2_options);
	World.add (world,block2);
   
	block3 = Bodies.rectangle(350,50,70,50,block3_options);
	World.add (world,block3);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ellipse (block1.position.x,block1.position.y,60,60)
  rect (block2.position.x,block2.position.y,70,40)
  rect (block3.position.x,block3.position.y,70,50)

  drawSprites();
 
}



