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
    this.staticState = {};
    this.entities = entities;

    this.client.on('world.synchronize', this.synchronize.bind(this));
  }

  synchronize(state)
  {
    for (let config of state.entities) {
      let entity = this.entities.find(config.id);

      if (!entity) {
        entity = this.spawnEntity(config);
      }

      entity.applyConfiguration(config);
    }
  }

  initializeStaticState(state)
  {
    this.staticState = state;
    this.staticState.entities.map(config => this.spawnEntity(config));
  }

  spawnEntity(config)
  {
    let { name, id } = config;
    return this.entities.create(name, id, config);
  }

  join(name)
  {
    let deferred = Q.defer();

    this.client.send('world.join', { name });
    this.client.on('world.joined', (data) => {
      this.initializeStaticState(data.staticState);
      this.emit('joined', data);
      deferred.resolve(data);
    });

    return deferred.promise;
  }
}
