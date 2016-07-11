let
  EventEmitter = require('event-emitter-es6'),
  Q = require('q')
;

module.exports = class World extends EventEmitter
{

  constructor(client, entities)
  {
    super();
    this.client = client;
    this.state = {};
    this.localState = {};
    this.entities = entities;
  }

  initializeLocal(state)
  {
    this.localState = state;

    for (let entity of this.localState.entities) {
      this.entities.create(entity.name, entity.id, entity.options);
    }
  }

  join(name)
  {
    let deferred = Q.defer();

    this.client.send('world.join', { name });
    this.client.on('world.joined', (data) => {
      this.initializeLocal(data.localState);
      this.emit('joined', data);
      deferred.resolve(data);
    });

    return deferred.promise;
  }

}
