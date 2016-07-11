'use strict';

module.exports = class World
{
  constructor(name)
  {
    this.name = name;
    let id = 0;

    this.state = {
      entities:[]
    };

    this.localState = {
      entities: [{
        id: ++id,
        name: 'ground',
        options: {}
      }]
    };

    for (let i = 0; i < 25; i++) {
      this.localState.entities.push({
        id: ++id,
        name: 'tree',
        options: {}
      });
    }

    console.log(this.localState);
  }

  join(client, socket)
  {
    socket.join(this.name);
    socket.emit('world.joined', { localState: this.localState });
  }

  leave(client, socket)
  {
    socket.leave(this.name);
    console.log(`[${socket.id}]`, `left world - ${this.name}`);
  }
}
