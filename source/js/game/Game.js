/**
 * Handles loading the game and starting it. Also dispatches
 * ticks for the game loop.
 */
'use strict';

let
  EventEmitter = require('event-emitter-es6'),
  babylon = require('babylon'),
  Q = require('q')
;


module.exports = class Game extends EventEmitter
{
  constructor(engine, client, canvas, scene, assets, room, entitySystem)
  {
    super();

    this.engine = engine;
    this.client = client;
    this.canvas = canvas;
    this.scene = scene;
    this.assets = assets;
    this.room = room;
    this.entities = entitySystem;

    this.time = {
      tick: 0,
      delta: 0,
      now: Date.now()
    };
  }

  get supported()
  {
    return babylon.Engine.isSupported();
  }

  startLoop()
  {
    this.engine.runRenderLoop(this.loop.bind(this));
    this.emit('started');
  }

  updateTime()
  {
    let now = Date.now();
    this.time.delta = now - this.time.now;
    this.time.now = now;
    this.time.tick++;
  }

  loop()
  {
    this.updateTime();
    this.entities.update(this.time);
    this.scene.render();
  }

  start()
  {
    return this.client.connect()
      .then(() => this.assets.load())
      .then(() => this.room.join('wander'))
      .then(() => this.startLoop());
  }

  stop()
  {
    this.engine.stopRenderLoop();
    this.emit('stopped');
  }
}
