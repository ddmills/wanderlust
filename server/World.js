'use strict';

let EntitySystem = require('./entities/EntitySystem')

module.exports = class World
{
  constructor(name, entityFactory)
  {
    this.name = name;
    this.id = 0;
    this.seed = 0;
    this.entities = new EntitySystem(entityFactory);

    this.entities.create('ground', this.id++);

    for (let i = 0; i < 200; i++) {
      this.entities.create('tree', this.id++);
    }

    for (let i = 0; i < 20; i++) {
      this.entities.create('ghost', this.id++);
    }

    this.time = {
      tick: 0,
      delta: 0,
      now: Date.now()
    };
  }

  updateTime()
  {
    let now = Date.now();
    this.time.delta = (now - this.time.now) * process.env.CLOCK_SPEED;
    this.time.now = now;
    this.time.tick++;
  }

  loop()
  {
    this.updateTime();
    this.entities.update(this.time);
  }

  get state()
  {
    return {
      time: this.time,
      seed: this.seed,
      entities: this.entities.serialize()
    };
  }

  get staticState()
  {
    return {
      time: this.time,
      seed: this.seed,
      entities: this.entities.serializeStatic()
    };
  }

  join(client, socket)
  {
    socket.join(this.name);
    socket.emit('world.joined', { staticState: this.staticState });
  }

  leave(client, socket)
  {
    socket.leave(this.name);
    console.log(`[${socket.id}]`, `left world - ${this.name}`);
  }
}
