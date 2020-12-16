const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
  var engine, world;


var umb;
var drops;
var drops=[];
function preload(){
    
}

function setup(){
  createCanvas(700,800); 
  engine = Engine.create();
  world = engine.world;

    umb=new Umbrella(200,200);
    if(frameCount%150===0){
    for(i=0;1<100;i++){
        drops.push(new Drops(random(0,400),random(0,400)));
}
}
}
function draw(){
   background("black"); 
   Engine.update(engine);
   for(var i = 0; i<100; i++){
    drops[i].display();
    drops[i].update();
    
}
   drops.display();
   umb.display();
   drops.update();
   }
 

