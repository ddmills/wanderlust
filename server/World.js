'use strict';

module.exports = class World
{
  constructor(name)
  {
    this.name = name;
    this.id = 0;

    this.state = {
      seed: 0,
      tick: 0,
      entities:[]
    };

    this.staticState = {
      seed: 0,
      tick: 0,
      entities: [{
        id: ++this.id,
        name: 'ground',
        options: {}
      }]
    };

    for (let i = 0; i < 200; i++) {
      this.staticState.entities.push({
        id: ++this.id,
        name: 'tree',
        options: {}
      });
    }

    this.ghosts = [];
    for (let i = 0; i < 25; i++) {
      this.ghosts.push(this.addEntity('ghost', { position: { x: 0, y: 3, z: 0 } }));
    }
  }

  addEntity(name, options)
  {
    options = options || {};
    let id = ++this.id;
    let e = { id, name, options };
    this.state.entities.push(e);
    return e;
  }

  updateGhosts()
  {
    this.ghosts.forEach((ghost) => {
      let p = ghost.options.position;
      p.x += Math.round(Math.random() * 10) - 5;
      p.z += Math.round(Math.random() * 10) - 5;

      p.x = p.x > 50 ? 50 : p.x;
      p.x = p.x < -50 ? -50 : p.x;

      p.z = p.z > 50 ? 50 : p.z;
      p.z = p.z < -50 ? -50 : p.z;

      ghost.options.position = p;
    });
  }

  update()
  {
    this.updateGhosts();
    this.state.tick++;
    this.staticState.tick = this.state.tick;
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
