'use strict';

let
  io = require('socket.io-client')
;

module.exports = class SocketFactory
{

  static create(url)
  {
    let socket = io(url);

    let oldHandler = socket.onevent;

    socket.onevent = (packet) => {
      let args = packet.data || [];
      oldHandler.call(socket, packet);
      packet.data = ['*'].concat(args);
      oldHandler.call(socket, packet);
    }

    return socket;
  }

}
