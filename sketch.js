var x, y
var finish
var ball
function preload(){
  img1 =loadImage("open box.png")
  img2 =loadImage("box2.png")
  img3 =loadImage("box.jpg")
  
}
function setup() {
  createCanvas(800, 800);
  box245 = loadImage("box2.png")
  box123 = loadImage("box.jpg")
  x= 86
  y= 359
  
  
  collectItem = loadImage("tophat.jpg")
 
}

function draw() {
  background(220);
  console.log(finish)
   ellipse(130,420,50,50)
  
  text('Help The Man Find His Hat', 160, 70)
  textSize(8)
  text('press a for a hint', 160, 100)
  textSize(22)
  image(box123, x, y, 80, 120)
  function keyIsPressed () {
  if (key === 'a'){
    value = 225
    image(box123, x, y- 150, 80, 120) 
    fill(220)
    noStroke()
    rect(x,y,80,120)
    text('Its not Here!',123, 106)
  }
  }
   //image(img1);
  function draw() {
    if (keyIs === 'b' )
          fill(220)
          noStroke()
          rect(x,y,80,120)
    
  }
 // image(img2);
  image(box123, 321, 358, 80, 120)
  if (mouseIsPressed){
    noStroke()
    fill(220)
    rect(321, 358, 80, 120)
    
    image(box123, 321, 358- 150, 80, 120) }
  function ball(){
 // image(box123, 600, 358, 80, 120)
    fill(10)
    noStroke()
    ellipse(630,420,50,50)
    if (x > 100 && x <170 && y > 100) {
    safe = false;
   setup();  //start again
  }
    
  }
  //function ( ){
 
    
  //}
  //mouse show
   fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}
