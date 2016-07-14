'use strict';


module.exports = class EntitySystem
{
  constructor(entityFactory)
  {
    this.entityFactory = entityFactory;
    this.entities = {};
  }

  find(id)
  {
    return this.entities[id];
  }

  create(name, id, options)
  {
    if (this.entities[id]) {
      console.log('entity already exists!', name, id, options);
      return this;
    }

    let entity = this.entityFactory.create(name, id, options);

    this.entities[id] = entity;
    return entity;
  }

  update(time)
  {
    for (let id in this.entities) {
      this.entities[id].update(time);
    }
  }
}
