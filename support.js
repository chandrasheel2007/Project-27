class Support{

    constructor(x, y){
        var options = {

            isStatic:true

        }

        this.body = Bodies.rectangle(x, y, 800, 50, options);
        World.add(world, this.body);
        this.width = 800;
        this.height = 50;






    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);

        push();
        translate(pos.x, pos.y)
        fill(255, 0, 0);
        rect(0, 0, this.width, this.height);
        pop();





    }








}