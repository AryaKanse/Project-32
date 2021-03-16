class SlingShot{
    constructor(body1,point2){
        var options = {
            bodyA :body1,
            pointB :point2,
            stiffness : 0.1,
            length : 20

        }
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint);
    }
    fly(){
        this.constraint.bodyA = null
    }
    display(){
        if(this.constraint.bodyA){
        var posbody1 = this.constraint.bodyA.position;
        var posbody2 = this.constraint.pointB;
        push ();
        strokeWeight(2);
        line(posbody1.x,posbody1.y,posbody2.x,posbody2.y);
        pop ();
        }
    }

}