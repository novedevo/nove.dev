
var gravity = 400;

var config = {
    type: Phaser.WEBGL,
    width: 300,
    height: 128,
    input: {
        gamepad: true
    },
    backgroundColor: '#2d2d2d',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: gravity },
            tileBias: 10,
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var maxFallSpeed = 150;
var maxSpeed = 75;
var jumpSpeed = 175;
var accel = 300;
var friction = 0.5;
var startRunVelocity = 30;
let hoverThreshold = 15;
var drag = 0.5;
let dashSpeed = 250;

let startPoint;
let oldVelocity;
let dash;

let particles;
let emitter;



var game = new Phaser.Game(config);
var player;
var controls = Phaser.Input.Keyboard;

let left = false;
let right = false;
let a = false;
let x = false;
let dashable = true;

var pad = null;

function preload() {
    this.load.image('tiles', 'assets/tiles.png');
    this.load.tilemapTiledJSON('map', 'assets/untitled.json');
    this.load.spritesheet('heart', 'assets/heart.png', { frameWidth: 8, frameHeight: 8 });
    this.load.image('spark', 'assets/spark.png');
}

function create() {
    var map = this.make.tilemap({ key: 'map' });

    var tileset = map.addTilesetImage('tiles', 'tiles');

    var tile_layer = map.createLayer(0, tileset, 0, 0);

    //var map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 });
    //var tileset = map.addTilesetImage("tileset-images", 'tiles');
    //var tile_layer = map.createLayer('walls', tileset, 0, 0);

    cursors = this.input.keyboard.createCursorKeys();

    player = this.physics.add.sprite(64, 16, 'heart');
    player.setCollideWorldBounds(true);

    ground = this.physics.add.group();
    ground.create(map);

    ground.getChildren()[0].body.setFrictionX(100);

    // Set collision with player (can also be a group)
    tile_layer.setCollisionByExclusion([-1]);
    this.physics.add.collider(player, tile_layer);

    player.anims.create({
        key: 'pulse',
        frames: this.anims.generateFrameNumbers('heart'),
        frameRate: 8,
        repeat: -1
    });
    player.play('pulse');

    player.body.useDamping = true;

    player.body.drag.x = drag;


}

function update(time, delta) {

    if (dash) {
        if (dash.includes('left') && player.body.blocked.left) {
            dash = dash.replace('left', '');
            player.body.setVelocityX(0);
            if (dash) { return; }
        }
        else if (dash.includes('right') && player.body.blocked.right) {
            dash = dash.replace('right', '');
            player.body.setVelocityX(0);
            if (dash) { return; }
        }
        else if (dash.includes('up') && player.body.blocked.up) {
            dash = dash.replace('up', '');
            player.body.setVelocityY(0);
            if (dash) { return; }
        }
        else if (dash.includes('down') && player.body.blocked.down) {
            dash = dash.replace('down', '');
            player.body.setVelocityY(0);
            if (dash) { return; }
        }
        else if (player.body.position.distance(startPoint) < 40) {
            //console.log((startPoint));
            //console.log(player.body.position);
            return;
        }
        player.body.velocity = oldVelocity;
        player.body.allowDrag = true;
        player.body.setAllowGravity = true;
        dash = "";
        player.visible = true;
        particles.destroy();
    }

    pad = this.input.gamepad.getPad(0);

    if (player.body.velocity.y > maxFallSpeed) {
        player.body.setAllowGravity = true;
    }
    else {
        player.body.setAllowGravity = true;
    }

    if (player.body.blocked.down) {
        player.body.drag.x = drag / 100;
        dashable = true;
    }
    else {
        player.body.drag.x = drag;
    }


    if (pad) {



        if (pad.left) {
            if (!left && player.body.blocked.down) {
                player.setVelocityX(-startRunVelocity);
            }
            else if (player.body.velocity.x < -maxSpeed) {
                player.setAccelerationX(0);
            }
            else {
                player.setAccelerationX(-accel);
            }
            left = true;
            right = false;
        }
        else if (pad.right) {
            if (!right && player.body.blocked.down) {
                player.setVelocityX(startRunVelocity);
            }
            else if (player.body.velocity.x > maxSpeed) {
                player.setAccelerationX(0);
            }
            else {
                player.setAccelerationX(accel);
            }
            right = true;
            left = false;
        }
        else {
            player.setAccelerationX(0);
            left = false;
            right = false;
        }

        if (!pad.A) {
            a = false;
        }

        else if (!a && pad.A && player.body.blocked.down) {
            player.setVelocityY(-jumpSpeed);
            a = true;
            if (pad.left && player.body.velocity.x > -maxSpeed) {
                player.setVelocityX(-maxSpeed);
            }
            if (pad.right && player.body.velocity.x < maxSpeed) {
                player.setVelocityX(maxSpeed);
            }
        }
        else if (pad.A && Math.abs(player.body.velocity.y) < hoverThreshold) {
            player.body.setGravity(0, -200);
            a = true;
        }
        else {
            player.body.setGravity(0, 0);
        }

        if (dashable && !x && pad.X && (pad.left || pad.right || pad.up || pad.down)) {
            startPoint = player.body.position.clone();
            player.body.allowDrag = false;
            oldVelocity = player.body.velocity.clone();
            player.body.setVelocityX(0).setVelocityY(0);
            player.body.setAllowGravity = false;
            if (pad.left) {
                dash = 'left';
                player.body.setVelocityX(-dashSpeed);
            }
            if (pad.right) {
                dash = 'right';
                player.body.setVelocityX(dashSpeed);
            }
            if (pad.up) {
                dash += 'up';
                player.body.setVelocityY(-dashSpeed);
            }
            if (pad.down) {
                dash += 'down';
                player.body.setVelocityY(dashSpeed);
            }
            x = true;
            dashable = false;
            player.visible = false;
            particles = this.add.particles('spark');
            emitter = particles.createEmitter({
                speed:100,
                frequency:0.001,
                blend:'add'
            });
            emitter.startFollow(player);
        }
        else if (pad.X) {
            x = true;
        }
        else if (!pad.X) {
            x = false;
        }

    }
    else {

        // if (pad.axes.length) {
        //     player.setAccelerationX(pad.axes[0].getValue()*accel);
        //     //console.log(pad.axes[0].getValue()*accel);
        //     //console.log(player.body.acceleration)
        // }


        if (controls.JustDown(cursors.left) && player.body.blocked.down) {
            player.setVelocityX(-startRunVelocity);
        }
        if (controls.JustDown(cursors.right) && player.body.blocked.down) {
            player.setVelocityX(startRunVelocity);
        }


        if (cursors.left.isDown) {
            if (player.body.velocity.x < -maxSpeed) {
                player.setAccelerationX(0);
            }
            else {
                player.setAccelerationX(-accel);
            }

        }
        else if (cursors.right.isDown) {
            if (player.body.velocity.x > maxSpeed) {
                player.setAccelerationX(0);
            }
            else {
                player.setAccelerationX(accel);
            }
        }
        else {
            player.setAccelerationX(0);
        }

        if (controls.JustDown(cursors.up) && player.body.blocked.down) {
            player.setVelocityY(-jumpSpeed);
        }
        if (Math.abs(player.body.velocity.y) < hoverThreshold && cursors.up.isDown) {
            player.body.setGravity(0, -200);
        }
        else {
            player.body.setGravity(0, 0);
        }
    }

}

function frictionCalc(velocity) {
    console.log(-friction * velocity);
    return -friction * velocity;

}
