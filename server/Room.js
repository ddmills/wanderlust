'use strict';

module.exports = class Room
{
  constructor(name)
  {
    this.name = name;
  }

  join(client, socket)
  {
    socket.join(this.name);
    socket.emit('room.joined', { players: this.players });
  }

  leave(client, socket)
  {
    socket.leave(this.name);
    console.log(`[${socket.id}]`, `left room - ${this.name}`);
  }
}
