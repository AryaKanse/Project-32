class Block {
    constructor(x,y,w,h){
        var options = {
           
            restitution :0.4,
            friction :0.0,
        }
            this.body= Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.body);
            this.image = loadImage("corona.png");
            this.w = w;
            this.h = h;
            this.Visiblity = 255;
    }
    display(){

        push();
        var angle = this.body.angle;
        var pos= this.body.position;
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w, this.h);
        pop();

        if(this.body.speed < 3){
            super.display;
          }
          else{
            World.remove(world , this.body);
            push();
            this.Visiblity = this.Visiblity-5;
            tint(255,this.Visiblity);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
          }  
    }
    score(){
        if(this.Visiblity < 0 && this.Visiblity > -1005){
          score = score+1 ;
        }
      }
}