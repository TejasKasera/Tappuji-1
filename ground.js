class Ground {
    constructor(){
        var ground_options ={
            isStatic: true
        }
   this.ground = Bodies.rectangle(200,200,500,50, ground_options);
   World.add(world, this.ground);
    }
    display(){
     noStroke();
     fill(255);
     rectMode(CENTER);
     rect(this.ground.position.x, this.ground.position.y, 900,200);
    }
}
