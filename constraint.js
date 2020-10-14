class Rope{

    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {

            bodyA: bodyA.body,
            bodyB: bodyB.body,
            stiffness: 1,
            length: 600,
            pointB: {x: this.offsetX, y: this.offsetY}



        }

        this.body = Constraint.create(options);
        World.add(world, this.body);

    }


    display(){


        var A = this.body.bodyA.position;
        var B = this.body.bodyB.position;

        
        var Anchor1X = A.x;
        var Anchor1Y = A.y;
        var Anchor2X = B.x+this.offsetX;
        var Anchor2Y = B.y+this.offsetY;
        
        strokeWeight(5);
        stroke(200);
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);




    }
}






