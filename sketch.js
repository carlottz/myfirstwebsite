let r= 200;
function setup() {
  // put setup code here
  createCanvas(innerWidth, innerHeight);
  background(0);
}

function draw() {
  
  let x= mouseX; 
  let y= mouseY;
  
  background(x%255, 255- y%255, 200);
  // sto trasformando il cerchio in un quadrato ad una condizione
  // con un if/else statement
 let vertices= map(mouseX, r, width-r , 4, 25);;
 let start= 0;
 beginShape();
 for (let i = start; i< vertices; i++) {
  let angle = map(i, start, vertices, 0, TWO_PI);
  let posX = r * cos(angle) + x;
  let posY = r * sin(angle) + y;
  vertex(posX, posY);
 }
 endShape();
  if(x > width / 2){
    rect(x-r/2, y-r/2, r, r) && fill(255-x%100, y%255, 100);
    // se il mouse si sposta nella meta destra del canvas diventa un rettangolo
  }else{
  fill(255,255-y%200,100);
  ellipse(x,y,r);
  }

  // ellipse(x, y, r);
  // put drawing code here

 
}



function windowResized(){
  resizeCanvas(innerWidth, innerHeight);
}