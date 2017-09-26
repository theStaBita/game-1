//
// TODO: Copyright
//
// TODO: License
//
//--------------------------------------
// Filename: boot.js
// Description:
//--------------------------------------
"use strict"
//--------------------------------------

//--------------------------------------
Simon.Boot = function(_game)
{
  Phaser.State.call(this, _game);
  _game.state.add("Boot", this, false);
};

Simon.Boot.prototype = Object.create(Phaser.State.prototype);
Simon.Boot.prototype.constructor = Simon.Boot;

//--------------------------------------
Simon.Boot.prototype.preload = function()
{
  // Background color
  this.game.stage.backgroundColor = "#000"

  this.ready = true;
};

//--------------------------------------
Simon.Boot.prototype.create = function()
{
  if (this.ready)
  {
    console.log("Starting Loader");
    this.game.state.start("Loader");
  }
};

//--------------------------------------
Simon.Boot.prototype.update = function()
{
};

//--------------------------------------
Simon.Boot.prototype.render = function()
{
};
