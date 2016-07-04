'use strict';

let
  Game          = require('./Game'),
  Scene         = require('./Scene'),
  Client        = require('../network/Client'),
  Room          = require('../room/Room'),
  EngineFactory = require('./EngineFactory'),
  AssetLibrary  = require('../assets/AssetLibrary')
;

module.exports = class GameFactory
{

  static create()
  {
    let canvas = document.getElementById('game-area');
    let engine = EngineFactory.create(canvas);
    let client = new Client();
    let scene  = new Scene(engine);
    let assets = new AssetLibrary(scene);
    let room   = new Room(client);

    return new Game(engine, client, canvas, scene, assets, room);
  }

}
