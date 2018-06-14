class Enemie {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 15;
        this.height = 10;

        this.speed = 3;
    }

    //Show the enemie
    show() {
        fill(255, 0, 255);
        rect(this.x, this.y, this.width, this.height);
    }

    //Move the enemie
    move() {
        this.y += this.speed;
    }
}