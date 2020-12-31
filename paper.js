class Paper{
constructor(x,y,r){
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body=Bodies.circle(x,y,r/2,options);
this.r=r/2;
World.add(world,this.body)
this.image=loadImage("paper.png")
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
fill ("pink");
imageMode(CENTER);
image(this.image,0,0,40,40);
pop();



}


}