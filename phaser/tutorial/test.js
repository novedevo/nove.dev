


var config = {
    type: Phaser.AUTO,
    width: 128,
    height: 128,
    pixelArt:true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false,
        }

    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var ground;
var level;
var levelGrid;

var game = new Phaser.Game(config);

function preload() {

    this.load.image('tiles', 'tiles.png');
    this.load.tilemapTiledJSON('map', 'test_level.json');
}

function create() {
    var map = this.make.tilemap({key:'map'});

    var layer = map.createLayer(0, this.tiles, 0, 0);

    ground = this.physics.add.staticGroup();



}

function update() {
}