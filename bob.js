class Bob{

    constructor(x, y){

        var options = {

            'restitution': 1,
            'frictionAir': 0.001,
            'density': 0.1


        }

        this.body = Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
        

    }

    display(){

        var pos = this.body.position;
        var radius = 50;
        ellipseMode(RADIUS);
        

        push();
        translate(pos.x, pos.y);
        fill(255);
        ellipse(0, 0, radius, radius);
        pop();


    }

}