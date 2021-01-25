class Box1 {
    constructor(x, y, width, height) {
      var options = { 
          restitution:0.4,
          friction:0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity=255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      if(this.body.speed < 6){
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(132, 205, 147);
    
        rect(0, 0, this.width, this.height);
        pop();
  
      }
      else{
  
        World.remove(world, this.body);
        push();
        this.visiblity= this.visiblity-5;
        tint(255,this.visiblity);
        pop();
      }
    }
  }