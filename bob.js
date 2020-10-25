class bob {

constructor (x,y,r){

var options = {

'density': 0.8,
'restitution' : 1,

}

this.r = r;

this.body = Bodies.circle(x,y,r,options);
Worldc.add(world,this.body);

}

display(){

var pos = this.body.position;

push ();
translate(pos.x,pos.y);
fill ("red");
stroke ("red");
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop ();

}

}