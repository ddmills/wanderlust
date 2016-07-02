/**
 * Handle communication with the server at an event level.
 *
 * ```
 * let client = Client.create();
 * client.connect();
 * client.send('event-name', { 'hello': 'world' });
 * client.on('event-name', handleResponse);
 * ```
 */
'use strict';

let
  EventEmitter  = require('event-emitter-es6'),
  SocketFactory = require('./SocketFactory'),
  Q             = require('q')
;

module.exports = class Client extends EventEmitter
{

  constructor()
  {
    super();
    this.id = -1;
    this.url = 'http://localhost';
  }

  static create()
  {
    return new Client;
  }

  send(name, data)
  {
    this.socket.emit(name, data);
    this.emit('send', name, data);
  }

  recieve(name, data)
  {
    this.emit('recieve', name, data);
    this.emit(name, data);
  }

  onConnect(data)
  {
    this.id = this.socket.io.engine.id;
    this.recieve('connect', data);
  }

  onDisconnect(data)
  {
    this.recieve('disconnect', data);
  }

  connect()
  {
    this.socket = SocketFactory.create(this.url);

    this.socket.on('connect', this.onConnect.bind(this));
    this.socket.on('disconnect', this.onDisconnect.bind(this));
    this.socket.on('*', this.recieve.bind(this));

    let deferred = Q.defer();
    this.on('connect', deferred.resolve);
    return deferred.promise;
  }
}
