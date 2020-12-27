const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];

var divisionh=300;
var score = 0;
var count = 0;

var gameState="play";

function setup() {
  createCanvas(800, 900);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionh/2, 10, divisionh));
   }

    for (var j = 75; j <=width; j=j+50){ 
       plinkos.push(new Plinko(j,75));
    }

    for (var k = 50; k <=width-10; k=k+50) {
      plinkos.push(new Plinko(k,175,10));
    }

     for (var l = 75; l <=width; l=l+50){
      plinkos.push(new Plinko(l,275));
    }

     for (var m = 50; m <=width-10; m=m+50) {
      plinkos.push(new Plinko(l,375));
    }
}

function draw() {
  background("black");

  if(gameState === "play"){
    
    if(particle!=null){
      particle.display();

      if(particle.body.position.x>760){

        if(particle.body.position.x<300){
          score=score+500;
          particle=null;
       }

        if(particle.body.position.x>301 && particle.body.position.x<600){
          score=score+100;
          particle=null;
        }

        if(particle.body.position.x>601 && particle.position.x<900){
          score=score+200;
          particle=null;
        }

        if(count===5){
          gameState = "end";
          count=null;
        }
    }
  } 
} else{
    if(gameState === "end"){      
      text("Game Over",400,450);
    }
  }
  
  for (var x = 0; x < plinkos.length; x++) {
    plinkos[x].display(); 
  }
 

  for (var z = 0; z < divisions.length; z++){
    divisions[z].display();
  }
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
}

function mousePressed(){
  if(gameState!=="end"){
    particle = new Particle(mouseX,10,10);
    count++;
    console.log(count);
  }
}
