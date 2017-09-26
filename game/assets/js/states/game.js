//
// TODO: Copyright
//
// TODO: License
//
//--------------------------------------
// Filename: game.js
// Description:
//--------------------------------------
"use strict"
//--------------------------------------

//--------------------------------------
Simon.Game = function(_game)
{
  Phaser.State.call(this, _game);
  _game.state.add("Game", this, false);
};

Simon.Game.prototype = Object.create(Phaser.State.prototype);
Simon.Game.prototype.constructor = Simon.Game;

//--------------------------------------
Simon.Game.prototype.preload = function()
{
  // Background color
  this.game.stage.backgroundColor = "#FFC0CB"
};

//--------------------------------------
Simon.Game.prototype.create = function()
{
  this.game.input.keyboard.onDownCallback  = this.onKeyDown;
  this.game.input.keyboard.callbackContext = this;

  this.text = this.game.add.text(0, 0, "Simon", {font: "65px monospace", fill: "#FFFFFF"});
};

//--------------------------------------
Simon.Boot.prototype.update = function()
{
};

//--------------------------------------
Simon.Game.prototype.render = function()
{
};

//--------------------------------------
Simon.Game.prototype.onKeyDown = function(key)
{
  var keyCode = key.keyCode || key.which;
  if (keyCode == Simon.ESC_KEY)
  {
    this.onLaunchGame();
  }
}

//--------------------------------------
Simon.Game.prototype.onLaunchGame = function()
{
  this.game.input.keyboard.onDownCallback = null;
  this.game.input.keyboard.callbackContext = null;
  this.game.input.onDown.remove(this.onLaunchGame, this);

  this.game.state.start("Menu");
}
