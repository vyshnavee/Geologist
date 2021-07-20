class Stone {
    constructor (x,y,width,height){
        var options ={
          //isStatic:false,
      restitution:0.8,
      density:12,
        friction:0.9
        }
      this.width=width;
      this.height=height;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
      World. add (world,this.body)
    }
    display(){
        var stonepos=this.body.position
        push ();
        translate (stonepos.x,stonepos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke ("black");
        fill ("maroon");
        rect (0,0,this.width,this.height);
        pop ();
    }
}