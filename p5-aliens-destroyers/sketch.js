let player;

let shots = [];
let enemies = [];

let counter = 0;

let playerSpeed = 7;

let score = 0;
let canvasScore;

function setup() {
    frameRate(25);
    createCanvas(600, 400);
    canvasScore = createP(`My Score: ${score}`).addClass('.score');

    player = new Player();
    loadEnemies();
}

function draw() {
    background(86, 86, 86);
    canvasScore.elt.textContent = `My Score: ${score}`;

    counter += 1; //Timer to shoot
    player.show(); //Show de player

    //Move de player with keyboard arrows
    if (keyIsDown(RIGHT_ARROW)) {
        player.move(playerSpeed);
    }

    if (keyIsDown(LEFT_ARROW)) {
        player.move(-playerSpeed);
    }

    //Show and move the shots
    shots.forEach((el, index) => {
        el.fire();
        el.move();
        if (el.y < 10) {
            shots.splice(index, 1);
        }
    });

    //Show and move the enemies
    enemies.forEach(el => {
        el.show();
        el.move();

        //Check if this enemie hti the ground
        //If Yes, stop de game
        if (el.y > height)
            reset();
    });

    shots.forEach((shot, shotIndex) => {
        enemies.forEach((enemie, enemieIndex) => {
            hit = collideRectRect(enemie.x, enemie.y, enemie.width, enemie.height, shot.x, shot.y, shot.width, shot.height);
            if (hit) {
                shots.splice(shotIndex, 1);
                enemies.splice(enemieIndex, 1);
                score += 1;
            }
        });
    });
}

function keyPressed() {

    //Space to shoot
    if (keyCode === 32) {
        //Just a timer to control when you can shoot again
        if (counter > 10) {
            shoot();
            counter = 0;
        }
    }
}

function shoot() {
    //Create a gun shot in the player center
    let shot = new Shot(player.x + player.bodyWidth / 2, player.y - player.bodyHeight);
    shots.push(shot);
}

//Load an enemie every 2000ms
function loadEnemies() {
    setInterval(() => {
        let enemie = new Enemie(random(0, width), 0);
        enemies.push(enemie);
    }, 2000);
}

//Note: Temporary resource, this is to reset the game ;)
function reset() {
    frameRate(0);
}