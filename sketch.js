
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var gameState = "onSling";

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
    mango2=new mango(900,170,30);
	mango3=new mango(950,190,30);
	mango4=new mango(920,240,30);
	mango5=new mango(1050,50,30);
	mango6=new mango(1000,70,30);
	mango7=new mango(1030,140,30);
	mango8=new mango(1090,200,30);
	mango9=new mango(1155,200,30);
	mango10=new mango(1200,170,30);
	mango11=new mango(1000,230,30);
	mango12=new mango(1250,230,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  stoneObj=new stone(190,330);
  launcherObject=new slingShot(stoneObj.body,{x:235, y:425})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  groundObject.display();
  stoneObj.display()
  launcherObject.display();

  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)
  detectCollision(stoneObj,mango6)
  detectCollision(stoneObj,mango7)
  detectCollision(stoneObj,mango8)
  detectCollision(stoneObj,mango9)
  detectCollision(stoneObj,mango10)
  detectCollision(stoneObj,mango11)
  detectCollision(stoneObj,mango12)
}

function mouseDragged(){
  if (gameState ==="onSling"){
      Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  launcherObject.fly()
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     launcherObject.attach(stoneObj.body);
     gameState="onSling"
  }
}

function detectCollision(stoneObj,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stoneObj.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+5){
  Matter.Body.setStatic(mango.body,false)
}
}
