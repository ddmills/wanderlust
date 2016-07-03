let
  EventEmitter = require('event-emitter-es6'),
  Q = require('q')
;

module.exports = class Room extends EventEmitter
{

  constructor(client)
  {
    super();
    this.client = client;
  }

  create(name)
  {
    let deferred = Q.defer();

    this.client.send('room.create', { name });
    this.client.on('room.created', (data) => {
      this.emit('joined', data);
      deferred.resolve(data);
    });

    return deferred.promise;
  }

  join(name)
  {
    let deferred = Q.defer();

    this.client.send('room.join', { name });
    this.client.on('room.joined', (data) => {
      this.emit('joined', data);
      deferred.resolve(data);
    });

    return deferred.promise;
  }

}
