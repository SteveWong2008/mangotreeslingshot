
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stoneT, mangoes;
var slingShot;
var ground;
var treeImg, tree;
var mango1,mango2,mango3,mango4,mango5;
var boyImg, boy

function preload()
{
	treeImg = loadImage("tree.png");
  boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);
	tree = createSprite(600,400);
  tree.addImage(treeImg)
  tree.scale = 0.5;

  boy = createSprite(210,630);
  boy.addImage(boyImg);
  boy.scale = 0.1
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneT = new stone(150,565);
	slingShot = new sling(stoneT.body,{x:154,y:565});
	ground = new Ground(600,height,1200,30);
	mango1 = new mango(426,344)
	mango2 = new mango(401,302)
	mango3 = new mango(729,301)
	mango4 = new mango(632,156)
	mango5 = new mango(607,285)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  console.log(mouseX,mouseY)
  

  stoneT.display();
  slingShot.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


  drawSprites();
  
}

function mouseDragged(){
    Matter.Body.setPosition(stoneT.body, {x:mouseX,y:mouseY});
    
}

function mouseReleased(){
    slingShot.fly();
}



