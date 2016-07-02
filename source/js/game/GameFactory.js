'use strict';

let
  Game          = require('./Game'),
  Client        = require('../network/Client'),
  EngineFactory = require('./EngineFactory')
;

module.exports = class GameFactory
{

  static create()
  {
    let canvas = document.getElementById('game-area');
    let engine = EngineFactory.create(canvas);
    let client = Client.create();

    return new Game(engine, client, canvas);
  }

}
