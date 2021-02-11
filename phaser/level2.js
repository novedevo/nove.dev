
var config = {
    type: Phaser.AUTO,
    width: 300,
    height: 150,
    input: {
        gamepad: true
    },
    backgroundColor: '#2d2d2d',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    physics: {
        default: 'matter',
        matter: { 
            enableSleeping: true,
            gravity: { y: 0.1 },
            debug: {
                showBody: true,
                showStaticBody: true
            } 
        }
    },
    scene: {
        init:initScene,
        preload: preloadScene,
        create: createScene,
        update: updateScene
    }
}

const game = new Phaser.Game(config);
let player;
let controls = Phaser.Input.Keyboard;
let physics;

function initScene(){}

function preloadScene() {
    this.load.image('tiles', 'assets/tiles.png');
    this.load.tilemapTiledJSON('map', 'assets/untitled.json');
    this.load.spritesheet('heart', 'assets/heart.png', { frameWidth: 8, frameHeight: 8 })
    this.load.json('heart-physics', 'heart.json');
}

function createScene() {
    
    var map = this.make.tilemap({ key: 'map' });
    var tileset = map.addTilesetImage('tiles', 'tiles');
    var tile_layer = map.createLayer(0, tileset, 0, 0);

    physics = this.cache.json.get('heart-physics');

    //playerImage = this.add.image(64, 16, 'heart');
    
    player = this.matter.add.sprite(64, 16, 'heart', 0);

    player.setFrictionAir(0.001);
    player.state = 0;

}

function updateScene(){
    updatePlayer();
}

function updatePlayer(){
    if (player){
        return;
    }
}