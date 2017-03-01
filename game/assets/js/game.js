let run_game = function() {

    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'id-game', { preload: preload, create: create , update: update });

    function preload () {
        game.load.image('player','assets/img/roguelike/Girl-Mage-Single.png');
        game.load.image('item','assets/img/roguelike/Item-Single.png');
        game.load.image('brick', 'assets/img/roguelike/Tileset-Single.png');
        game.load.image('ledge', 'assets/img/roguelike/Ledge-Single.png');
    }

    let platforms

    function create () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        platforms = game.add.group();
        platforms.enableBody = true;

        var ground = []
        for (i=0; i<15; i++) {
            ground.push(platforms.create((i*56), game.world.height - 60, 'brick'));
            ground[i].scale.setTo(7, 7);
            ground[i].smoothed = false;
            ground[i].body.immovable = true;
        }

        var ledge = platforms.create(400, 400, 'ledge');
        ledge.body.immovable = true;
        ledge.immovable = true;
        ledge.smoothed = false;
        ledge.scale.setTo(7,7);
        ledge = platforms.create(150, 250, 'ledge');
        ledge.smoothed = false;
        ledge.body.immovable = true;
        ledge.scale.setTo(7,7);

        player = game.add.sprite(32, game.world.height - 150, 'player');
        game.physics.arcade.enable(player);

        player.smoothed = false;
        player.scale.setTo(7,7);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        // player.animations.add('left', [0, 1, 2, 3], 10, true);
        // player.animations.add('right', [5, 6, 7, 8], 10, true);
    }

    function update() {
        var hitPlatform = game.physics.arcade.collide(player, platforms);

        let cursors = game.input.keyboard.createCursorKeys();

        //  Reset the players velocity (movement)
        player.body.velocity.x = 0;

        if (cursors.left.isDown)
        {
            //  Move to the left
            player.body.velocity.x = -150;

            // player.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
            //  Move to the right
            player.body.velocity.x = 150;

            // player.animations.play('right');
        }
        else
        {
            //  Stand still
            player.animations.stop();

            player.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down && hitPlatform)
        {
            player.body.velocity.y = -350;
        }
    }
}
