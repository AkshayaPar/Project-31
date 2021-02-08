class Man{
    constructor(x,y,r){
      var options_man = {
        isStatic: true,
        restitution: 0.1,
        friction: 0.5
      }
    
    this.x = x;
    this.y = y;
    this.r = r;

    
    

    this.body = Bodies.circle(this.x,this.y,this.r,options_man);
    World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
     push();
     
     translate(pos.x,pos.y);
     rectMode(CENTER);
     strokeWeight(2);
     fill("silver");
     imageMode(CENTER);
     image(this.image,0,0,420,420);

     pop();
    }
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

// create the array of ranindrops
var raindrops = [];

// make  a new umbrella 
var img;

// give image to the background
var backgroundImg;

// give image to thunder
var thunder1,thunder2 ,thunderImg1 , thunderImg2 , thunderImg3;

function preload(){
  // load background image
  backgroundImg = loadImage("Image/bg.jpg");

  // load both thunder images
    thunder1 = loadImage("Image/i1 (1).png");
    thunder2 = loadImage("Image/i1 (2).png");
}

function setup(){

  // To create canvas
  var canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  
  // crate engine  
    engine = Engine.create();

    // to create world
    world = engine.world;

  // To make sprites of thunderImages 
  thunderImg1 = createSprite(displayWidth/2,5,10,40);
  thunderImg2 = createSprite(200,5,10,40);
  thunderImg3 = createSprite(1100,5,10,40);
  
  // To give the positions to img of umbrella
    img = new Umbrella(displayWidth/2,500);
}

function draw(){
  
    // add image to the background
    background(backgroundImg);

  // To update Engine
    Engine.update(engine);

   // To create raindrops by frame count
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,10);
      raindrops.push(raindrop);
    }
   // To display umbrella img
    img.display();
   // To display raindrops
    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 
  
    // add random img to the thunder images 1
    if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg1.addImage(thunder2);
                break;
        default: break;
      }
    }   
  
    // add random img to the thunder images 2
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunderImg2.addImage(thunder1);
                  break;
          case 2: thunderImg2.addImage(thunder2);
                  break;
          default: break;
        }
      }   
   
      // To add random img to the thunder images 3
  if(frameCount % 10 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1:thunderImg3.addImage(thunder1);
                    break;
            case 2: thunderImg3.addImage(thunder2);
                    break;
            default: break;
          }
        } 
  // for drawing the sprites write drawSprites at the end 
    drawSprites();
}   */