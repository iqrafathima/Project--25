
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 300, 15);

  ground = new Ground(400, 580, 800, 20);
  
  leftSide = new Dustbin(535, 485, 20, 170);
  bottom = new Dustbin(620, 560, 150, 20);
  rightSide = new Dustbin(690, 485, 20, 170);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("brown");
  
  Engine.update(engine);

  paper.display();
  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}