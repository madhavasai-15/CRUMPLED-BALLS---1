class Paper{
    constructor(x, y){
        var options = {isStatic: false, restitution: 0.3, friction: 0.5, density: 1.2};
        this.body = Bodies.circle(x, y, 50, options);
        this.image = loadImage("Paper.png");
        World.add(world, this.body);
    }
    display(){
        push();
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
    }
}