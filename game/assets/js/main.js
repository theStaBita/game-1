//
// TODO: Copyright
//
// TODO: License
//
//--------------------------------------
// Filename: main.js
// Description:
// - Initializes global game variables.
// - Configures game states.
// - Main entrypoint for the game.
//--------------------------------------
"use strict"
//--------------------------------------

var Simon;

if (!Simon)
  Simon = {};

if (!Simon.BASE_PATH)
{
  Simon.BASE_PATH = location.href.substr(0, location.href.lastIndexOf("/") + 1);
}

Simon.SCREEN_WIDTH    = 800;
Simon.SCREEN_HEIGHT   = 600; 
Simon.RENDERER        = Phaser.CANVAS;
Simon.PARENT          = 'id-game';
Simon.TRANSPARENT     = null;
Simon.ANTIALIAS       = false;
Simon.PHYSICS_CONFIG  = false;

Simon.MOVE_LEFT  = Phaser.Keyboard.LEFT;
Simon.MOVE_RIGHT = Phaser.Keyboard.RIGHT;
Simon.MOVE_UP    = Phaser.Keyboard.UP;
Simon.MOVE_DOWN  = Phaser.Keyboard.DOWN;
Simon.START_KEY  = Phaser.Keyboard.SPACEBAR;
Simon.ESC_KEY    = Phaser.Keyboard.ESC;

Simon.game = null;

Simon.STATES = {};

window.onload = function()
{
  Simon.game = new Phaser.Game(Simon.SCREEN_WIDTH,
                               Simon.SCREEN_HEIGHT,
                               Simon.RENDERER,
                               Simon.PARENT,
                               Simon.TRANSPARENT,
                               Simon.ANTIALIAS,
                               Simon.PHYSICS_CONFIG);

  Simon.STATES.boot   = new Simon.Boot(Simon.game);
  Simon.STATES.loader = new Simon.Loader(Simon.game);
  Simon.STATES.menu   = new Simon.Menu(Simon.game);
  Simon.STATES.game   = new Simon.Game(Simon.game);

  Simon.game.state.start("Boot");
};
