
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
 var roofObject;
 var rope1,rope2,rope3,rope4,rope5;





function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1=new bob(500,400,80);
	bobObject2=new bob(580,400,80);
	bobObject3=new bob(660,400,80);
	bobObject4=new bob(740,400,80);
	bobObject5=new bob(820,400,80);
	roofObject=new roof(width/2,200,width,20);


rope1=new chain(bobObject1.body,roofObject.body,-this.r*2,0);
rope2=new chain(bobObject2.body,roofObject.body,-this.r*2,0);
rope3=new chain(bobObject3.body,roofObject.body,-this.r*2,0);
rope4=new chain(bobObject4.body,roofObject.body,-this.r*2,0);
rope5=new chain(bobObject5.body,roofObject.body,-this.r*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
bobObject1. display();
bobObject2. display();
bobObject3. display();
bobObject4. display();
bobObject5. display();
roofObject.display();

/*rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();*/

  drawSprites();
 
}



