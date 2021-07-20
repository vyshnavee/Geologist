class Iron {
    constructor (x,y,width,height){
       var options ={
            friction:3,
            density:30,
            restitution:0.8
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display (){
       var ironpos=this.body.position
       push ()
       translate (ironpos.x,ironpos.y)
       rectMode(CENTER);
       strokeWeight(4);
       stroke ("black")
       fill ("black")
       rect (0,0,this.width,this.height);
       pop ();

    }
}