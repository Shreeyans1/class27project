var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3;
var diameter,startposx,startposy;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
	diameter = 40;
	block = new Block(400,20,400,50);
	startposx = 400;
	startposy = 20+500
	ball1 = new Ball(startposx-diameter*2,startposy,30);
	ball2 = new Ball(startposx-diameter,startposy,30);
	ball3 = new Ball(startposx,startposy,30);
	ball4 = new Ball(startposx+diameter,startposy,30);
	ball5 = new Ball(startposx+diameter*2,startposy,30);
	
	
	string1 = new String(ball1.body,block.body,-diameter*2,0)
	string2 = new String(ball2.body,block.body,-diameter*1,0)
	string3 = new String(ball3.body,block.body,0,0)
	string4 = new String(ball4.body,block.body,diameter*1,0)
	string5 = new String(ball5.body,block.body,diameter*2,0)
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
  drawSprites();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 
 block.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

}



