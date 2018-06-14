class Shot {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 5;
        this.height = 8;

        this.speed = 3;
    }

    //Shoot me
    fire() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
    }

    //Move to the skies
    move() {
        this.y -= this.speed;
    }
}