//
// TODO: Copyright
//
// TODO: License
//
//--------------------------------------
// Filename: loader.js
// Description:
//--------------------------------------
"use strict"
//--------------------------------------

//--------------------------------------
Simon.Loader = function(_game)
{
  Phaser.State.call(this, _game);
  _game.state.add("Loader", this, false);
};

Simon.Loader.prototype = Object.create(Phaser.State.prototype);
Simon.Loader.prototype.constructor = Simon.Loader;

//--------------------------------------
Simon.Loader.prototype.preload = function()
{
  // Background color
  this.game.stage.backgroundColor = "#666"

  this.ready = true;
};

//--------------------------------------
Simon.Loader.prototype.create = function()
{
  if(this.ready)
  {
    console.log("Starting Menu");
    this.game.state.start("Menu");
  }
};

//--------------------------------------
Simon.Boot.prototype.update = function()
{
};

//--------------------------------------
Simon.Loader.prototype.render = function()
{
};
