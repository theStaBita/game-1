let run_game = function() {

    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'id-game', { preload: preload, create: create , update: update });

    function preload () {
        game.load.image('player','assets/img/roguelike/Girl-Mage-Single.png');
        game.load.image('item','assets/img/roguelike/Item-Single.png');
        game.load.image('wall', 'assets/img/roguelike/Tileset-Single.png');
        game.load.image('ledge', 'assets/img/roguelike/Ledge-Single.png');
    }

    var platforms;

    function create () {
        var sprites = {};

        game.physics.startSystem(Phaser.Physics.ARCADE);

        sprites.item = game.add.sprite(0, 0, 'item');
        sprites.wall = game.add.sprite(game.width/2, 0, 'wall');
        sprites.ledge = game.add.sprite(game.width/2, 0, 'ledge');
        sprites.player = game.add.sprite(0, 100, 'player');

        for (s in sprites) {
            sprites[s].smoothed = false;
        }
        
        platforms = game.add.group();
        platforms.enableBody = true;
        var ground = platforms.create(0, game.world.height - 64, 'wall');

        ground.body.immovable = true;
        ground.scale.setTo(6,6);

        let ledges = []
        ledge = platforms.create(400, 400, 'ledge');
        ledge.body.immovable = true;
        ledge.scale.setTo(6,6);
    }

    function update() {
    }
}
