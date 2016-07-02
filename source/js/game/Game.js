/**
 *
 *
 */
'use strict';

let
  EventEmitter = require('event-emitter-es6'),
  babylon      = require('babylon'),
  Q            = require('q')
;

module.exports = class Game extends EventEmitter
{

  constructor(engine, client, canvas)
  {
    super();

    this.engine = engine;
    this.client = client;
    this.canvas = canvas;
    this.loaded = false;
  }

  get supported()
  {
    return babylon.Engine.isSupported();
  }

  load()
  {
    let deferred = Q.defer();

    if (this.loaded) {
      deferred.resolve();
    } else {
      this.client
        .connect()
        .then(() => {
          this.loaded = true;
          this.emit('loaded');
          deferred.resolve();
        });
    }

    return deferred.promise;
  }

  startLoop()
  {
    this.engine.runRenderLoop(this.loop.bind(this));
    this.emit('started');
  }

  loop()
  {
    this.emit('tick');
  }

  start()
  {
    this.load().then(this.startLoop.bind(this));
  }

  stop()
  {
    this.engine.stopRenderLoop();
    this.emit('stopped');
  }

}
