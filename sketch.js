var ball ;
var groundObj;
var Ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	Engine = Engine.create();
    World = Engine.world;
	groundObj =new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	groundObj.debug = true;


	Engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isSastic : false,

		restitution:0.3,
		friction:0,
		density:1.2
	  }

	  ball=Bodies.circle(200,100,20,ball_options);
      World.add(world,ball)


	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		applyforce(200,100,20,ball_options)
	}
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
  



