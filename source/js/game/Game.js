/**
 * Handles loading the game and starting it. Also dispatches
 * ticks for the game loop.
 */
'use strict';

let
  EventEmitter = require('event-emitter-es6'),
  babylon      = require('babylon'),
  Q            = require('q')
;

module.exports = class Game extends EventEmitter
{

  constructor(engine, client, canvas, scene, assets, room)
  {
    super();

    this.engine = engine;
    this.client = client;
    this.canvas = canvas;
    this.scene  = scene;
    this.assets = assets;
    this.room   = room;
  }

  get supported()
  {
    return babylon.Engine.isSupported();
  }

  load()
  {
    return this.client.connect()
      .then(this.assets.load.bind(this.assets))
      .then(this.room.create('wander'))
      .then(this.room.join('wander'))
      .then(() => {
        this.scene.populate();
        this.emit('loaded');
      });
  }

  startLoop()
  {
    this.engine.runRenderLoop(this.loop.bind(this));
    this.emit('started');
  }

  loop()
  {
    this.emit('tick');
    this.scene.render();
  }

  start()
  {
    this
      .load()
      .then(this.startLoop.bind(this));
  }

  stop()
  {
    this.engine.stopRenderLoop();
    this.emit('stopped');
  }

}
