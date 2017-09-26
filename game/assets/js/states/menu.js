//
// TODO: Copyright
//
// TODO: License
//
//--------------------------------------
// Filename: menu.js
// Description:
//--------------------------------------
"use strict"
//--------------------------------------

//--------------------------------------
Simon.Menu = function(_game)
{
  Phaser.State.call(this, _game);
  _game.state.add("Menu", this, false);
};

Simon.Menu.prototype = Object.create(Phaser.State.prototype);
Simon.Menu.prototype.constructor = Simon.Menu;

//--------------------------------------
Simon.Menu.prototype.preload = function()
{
  // Background color
  this.game.stage.backgroundColor = "#FFF"
};

//--------------------------------------
Simon.Menu.prototype.create = function()
{
  this.game.input.keyboard.onDownCallback  = this.onKeyDown;
  this.game.input.keyboard.callbackContext = this;

  this.game.add.text(0, 0, "Menu", {font: "65px Arial"});
  var helptext = "Press Space to begin.";
  this.game.add.text(Simon.SCREEN_WIDTH - (helptext.length * 15), Simon.SCREEN_HEIGHT - (helptext.length * 2), helptext, {font: "30px Arial"});
};

//--------------------------------------
Simon.Boot.prototype.update = function()
{
};

//--------------------------------------
Simon.Menu.prototype.render = function()
{
};

//--------------------------------------
Simon.Menu.prototype.onKeyDown = function(key)
{
  var keyCode = key.keyCode || key.which;
  if (keyCode == Simon.START_KEY)
  {
    this.onLaunchGame();
  }
}

//--------------------------------------
Simon.Menu.prototype.onLaunchGame = function()
{
  this.game.input.keyboard.onDownCallback = null;
  this.game.input.keyboard.callbackContext = null;
  this.game.input.onDown.remove(this.onLaunchGame, this);

  this.game.state.start("Game");
}
