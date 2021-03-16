const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,holder1,holder2,ball,sling;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9;
var corona,sanitizer;

var score;

function preload(){
  corona = loadImage("corona.png");
  sanitizer = loadImage("sanitizer.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  score = 0;

  ground = new Ground(450,390,900,20);
  holder1 = new Holder(390,300,250,10);
  holder2 = new Holder(700,200,200,10);

 block1 = new Block(300,275,30,40);
 block2 = new Block(330,275,30,40);
 block3 = new Block(360,275,30,40);
 block4 = new Block(390,275,30,40);
 block5 = new Block(420,275,30,40);
 block6 = new Block(450,275,30,40);
 block7 = new Block(480,275,30,40);
 block8 = new Block(330,235,30,40);
 block9 = new Block(360,235,30,40);
 block10 = new Block(390,235,30,40);
 block11 = new Block(420,235,30,40);
 block12 = new Block(450,235,30,40);
 block13 = new Block(360,195,30,40);
 block14 = new Block(390,195,30,40);
 block15 = new Block(420,195,30,40);
 block16 = new Block(390,155,30,40);
 blocks1 = new Block(640,175,30,40);
 blocks2 = new Block(670,175,30,40);
 blocks3 = new Block(700,175,30,40);
 blocks4 = new Block(730,175,30,40);
 blocks5 = new Block(760,175,30,40);
 blocks6 = new Block(670,135,30,40);
 blocks7 = new Block(700,135,30,40);
 blocks8 = new Block(730,135,30,40);
 blocks9 = new Block(700,95,30,40);
 ball= new Ball(50,200,20);
  sling = new SlingShot(ball.body,{x:100,y:200});


}
// function isTouching(object1,object2){
   
//   if (object1.x - object2.x < object2.width/2 + object1.width/2
//     && object2.x - object1.x < object2.width/2 +object1.width/2
//     && object1.y - object2.y < object2.height/2 + object1.height/2
//     && object2.y -object1.y < object2.height/2 + object2.height/2) {
//   return true;
// }
// else {
//   return false;
// }
// }
function draw() {

  background("grey");

   textSize(35)
   fill("white")
   text("Score :" + score, width-300, 380)

  ground.display();
  holder1.display();
  holder2.display();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  ball.display();
  sling.display();
  textSize(22);
  fill("pink");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the Virus & Kill the virus",30,40);

  // if(ball.isTouching(block1 || block2 || block3 ||block4||block5||block6 ||block7||block8||block9||block10||block11||block12||block13||block14||block15||block16||blocks1||blocks2||blocks3||blocks4||blocks5||blocks6||blocks7||blocks8||blocks9)){
  //   score = score +1;
  // }
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX ,y :mouseY});
}
function mouseReleased(){
  sling.fly(); 
}
