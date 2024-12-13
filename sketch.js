var x, y
var finish
var ball
function preload(){
  img1 =loadImage("open box.png")
  img2 =loadImage("box2.png")
  img3 =loadImage("box.jpg")
  bg = loadImage("circus.jpg")
  music = loadSound("music.mp3")
}
function setup() {
  createCanvas(800, 800);
  box245 = loadImage("box2.png")
  box123 = loadImage("box.jpg")
  x= 228
  y= 359
  music.play()
  
  hat = loadImage("tophat.jpg")
 
}

function draw() {
  image(bg,0,0,800,800)
  console.log(finish)
  
  text('Help The Man Find His Hat', 300, 70)
  textSize(10)
  text('press the mouse for a hint', 500, 10)
  textSize(22)
  text('press "a" to lift the box', 300,100)
  image(box123, x, y, 80, 120)
  function keyIsPressed () {}
  if (key === 'a'){
    value = 225
    image(box123, x, y- 150, 80, 120) 
    fill('#fdf9f0')
    noStroke()
    rect(x,y,80,120)
    fill(200,100,10)
    text('Its not Here!',123, 106)
   
  }
   //image(img1);
  function draw() {
    if (keyIs === 'b' )
          fill(220)
          noStroke()
          rect(x,y,80,120)
    
  }
 // image(img2);
  image(box123, 493, 358, 80, 120)
  if (mouseIsPressed){
    noStroke()
    fill('#fdf9f0')
    rect(493, 358, 80, 120)
  image(hat,  493, 380, 80, 80 )  
    image(box123, 493, 358- 150, 80, 120) }
 
  
    
  
  //function ( ){
 
    
  //}
  //mouse show
   fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}