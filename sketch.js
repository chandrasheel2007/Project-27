
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rop1, rop2, rop3, rop4, rop5;


function preload()
{
	
}

function setup() {
	createCanvas(2000, 1000);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Support(width/2, 100);


	bob1 = new Bob(width/2-200, 600);
	bob2 = new Bob(width/2-100, 600);
	bob3 = new Bob(width/2, 600);
	bob4 = new Bob(width/2+100, 600);
	bob5 = new Bob(width/2+200, 600);


	rop1 = new Rope(bob1, roof, -200, 0);
	rop2 = new Rope(bob2, roof, -100, 0);
	rop3 = new Rope(bob3, roof, 0, 0);
	rop4 = new Rope(bob4, roof, 100, 0);
	rop5 = new Rope(bob5, roof, 200, 0);


	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display()
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  

 
  

  
  drawSprites();

  rop1.display();
  rop2.display();
  rop3.display();
  rop4.display();
  rop5.display();



  
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:50, y:0})
	}

}



