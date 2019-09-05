let drawMaster = new drawMaster;
function setup() {
  createCanvas(400, 400);
}
let tree= [];
function draw() {
  background(220);

}
function drawMaster(){
  this.update = function (){
  tree.push = new Square();
  tree.push = new Triangle();
}
}
function Square (startX, startY,radius){

  this.pointLLC = createVector(startX,startY);
  this.r = radius;
  Square(this.pointLLC.x, this.pointLLC.y, this.r);
  this.calcVal = function (){
    this.pointLUC =  createVector(startX, startY-this.r);
    this.pointRLC= createVector(startX+this.r, startY);
    this.pointRUC=createVector(startX+this.r, startY-this.r);
  }
}
function Triangle(p1, p2) {
  let pointLeft = createVector(p1.x, p1.y);
  let pointRight = createVector(p2.x, p2.y);

  this.calcUnknown = function(){
    let lenght = dist(p1.x, p1.y, p2.x, p2.y);
    let height = (sin(45)*lenght)
    let midPoint = createVector(p1.x+ lenght/2, p1.y+height);


  }

}
