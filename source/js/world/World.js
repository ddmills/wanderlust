let
  EventEmitter = require('event-emitter-es6'),
  Q = require('q')
;

module.exports = class World extends EventEmitter
{

  constructor(client)
  {
    super();
    this.client = client;
  }

  create(name)
  {
    let deferred = Q.defer();

    this.client.send('world.create', { name });

    this.client.on('world.created', (data) => {
      this.emit('joined', data);
      deferred.resolve(data);
    });

    return deferred.promise;
  }

  join(name)
  {
    let deferred = Q.defer();

    this.client.send('world.join', { name });
    this.client.on('world.joined', (data) => {
      this.emit('joined', data);
      deferred.resolve(data);
    });

    return deferred.promise;
  }

}
