
const Engine = Matter.Engine;
const Worldc = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
var bobx,boby,bobdiameter;

function preload()
{
	
}

function setup() {
  createCanvas(1600, 700);
  
  bobdiameter = 40;
  bobx = width/2;
  boby = height/10 + 400;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1 = new bob(bobx-bobdiameter*4,boby,40);
bob2 = new bob(bobx-bobdiameter*2,boby,40);
bob3 = new bob(bobx,boby,bobdiameter,40);
bob4 = new bob(bobx+bobdiameter*2,boby,40);
bob5 = new bob(bobx+bobdiameter*4,boby,40);

roof1 = new roof(800,175,840,50);

rope1 = new rope(bob1.body,roof1.body,-bobdiameter*4,0);
rope2 = new rope(bob2.body,roof1.body,-bobdiameter*2,0);
rope3 = new rope(bob3.body,roof1.body,bobdiameter/2-20,0);
rope4 = new rope(bob4.body,roof1.body,bobdiameter*2,0);
rope5 = new rope(bob5.body,roof1.body,bobdiameter*4,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-12});

}


}



