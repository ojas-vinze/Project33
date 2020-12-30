const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
 
var particle=null;
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

  for (var i = 0; i <=width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionh/2, 10, divisionh));
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
    
    if(particle!==null){
      particle.display();

      if(particle.body.position.y>760){

        if(particle.body.position.x<300){
          score=score+500;
          // particle=null;
       }

        if(particle.body.position.x>301 && particle.body.position.x<600){
          score=score+100;
          // particle=null;
        }

        if(particle.body.position.x>601 && particle.body.position.x<900){
          score=score+200;
          // particle=null;
        }

        if(count===5){
          gameState = "end";
          count=null;
        }
    }
  } 
} else{
    if(gameState === "end"){     
      textSize(100) 
      text("Game Over",width/4-20,height/2);
      particle=null
    }
  }
  
  for (var x = 0; x < plinkos.length; x++) {
    plinkos[x].display(); 
  }

  fill("yellow");
  rect(width/2,height-divisionh,width,5);

  for (var z = 0; z < divisions.length; z++){
    divisions[z].display();
  }
  textSize(20)
  text("Score : "+score,20,30);

  text("500",20,height-divisionh/2);
  text("500",100,height-divisionh/2);
  text("500",180,height-divisionh/2);
  text("500",260,height-divisionh/2);
  text("100",340,height-divisionh/2);
  text("100",420,height-divisionh/2);
  text("100",500,height-divisionh/2);
  text("200",580,height-divisionh/2);
  text("200",660,height-divisionh/2);
  text("200",740,height-divisionh/2);
  Engine.update(engine);
}

function mousePressed(){
  particle=null;
  if(gameState!=="end"){
    particle = new Particle(mouseX,10,10);
    count=count+1;
    console.log(count);
  }  
}
