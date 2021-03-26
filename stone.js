class stone extends BaseClass {
    constructor(x,y){
      var options = {
        'density':1.2
      }
      super(x,y,50,50,options);
      this.image = loadImage("stone.png");
      
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      
      
      super.display();
    }
  }