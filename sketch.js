
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustBin_1, dustBin_2, dustBin_3;

var backGroundImage;

function preload(){
	backGroundImage = loadImage("BackGround.png");
}

function setup() {
	createCanvas(1280, 720);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(640, 620, 1280, 20);

	paper = new Paper(140, 360);

	dustBin_1 = new DustBin(1050, 545, 30, 80);
	dustBin_2 = new DustBin(1220, 545, 30, 80);
	dustBin_3 = new DustBin(1135, 600, 200, 30);

	Engine.run(engine);
}


function draw() {
  	rectMode(CENTER);
	background(backGroundImage);	
	drawSprites();
	textSize(32);
	fill(255);
	text("Throw the paper", 500, 200);
	text("in the Dust bin", 590, 240);
	
	ground.display();
	paper.display();
	dustBin_1.display();
	dustBin_2.display();
	dustBin_3.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 530, y: -530});
	}
}

