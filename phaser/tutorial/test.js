var config = {
    type: Phaser.WEBGL,
    width: 128,
    height: 128,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 150 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var maxSpeed = 75;
var jumpSpeed = 100;
var accel = 100;
var friction = 0.5;
var startRunVelocity = 30;
var keysHeld = [];


var game = new Phaser.Game(config);
var player;
var controls = Phaser.Input.Keyboard;

function preload() {
    this.load.image('tiles', 'assets/tiles.png');
    this.load.tilemapTiledJSON('map', 'assets/untitled.json');
    this.load.image('bomb', 'assets/bomb.png');
}

function create() {
    var map = this.make.tilemap({ key: 'map' });

    var tileset = map.addTilesetImage('tiles', 'tiles');

    var tile_layer = map.createLayer(0, tileset, 0, 0);

    //var map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 });
    //var tileset = map.addTilesetImage("tileset-images", 'tiles');
    //var tile_layer = map.createLayer('walls', tileset, 0, 0);

    cursors = this.input.keyboard.createCursorKeys();

    player = this.physics.add.sprite(64, 16, 'bomb').setScale(0.5);
    player.setCollideWorldBounds(true);
    player.setFriction(friction);

    ground = this.physics.add.group();
    ground.create(tile_layer);

    ground.getChildren()[0].setFrictionX(0.5);

    // Set collision with player (can also be a group)
    tile_layer.setCollisionByExclusion([-1]);
    this.physics.add.collider(player, tile_layer);

    

    
}

function update(time, delta) {

    if (controls.JustDown(cursors.left)){
        player.setVelocityX(-startRunVelocity);
    }
    if (controls.JustDown(cursors.right)){
        player.setVelocityX(startRunVelocity);
    }


    if (cursors.left.isDown)
    {
            if (Math.abs(player.body.velocity.x) > maxSpeed){
                player.setAccelerationX(0);
            }
            else {
                player.setAccelerationX(-accel);
            }
        
    }
    else if (cursors.right.isDown)
    {
        if (Math.abs(player.body.velocity.x) > maxSpeed){
            player.setAccelerationX(0);
        }
        else {
            player.setAccelerationX(accel);
        }
    }
    else
    {
        player.setAccelerationX(0);
        keysHeld = []
    }

    if (cursors.up.isDown && player.body.blocked.down)
    {
        player.setVelocityY(-jumpSpeed);
    }

}

function frictionCalc(velocity){
    console.log(-friction*velocity);
    return -friction*velocity;
    
}
