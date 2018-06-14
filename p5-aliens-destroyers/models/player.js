class Player {
    constructor() {
        this.x = width / 2;
        this.y = height;

        this.bodyHeight = 20;
        this.bodyWidth = 10;
    }

    show() {
        //Draw the body
        fill(255);
        rect(this.x, this.y - this.bodyHeight, this.bodyWidth, this.bodyHeight);
    }

    move(value) {
        //Move the player and don't let him get out of the screen
        if ((this.x + value) >= 0 && (this.x + value) <= (width - this.bodyWidth)) {
            this.x += value;
        }
    }
}