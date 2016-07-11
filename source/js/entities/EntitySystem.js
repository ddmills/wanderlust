'use strict';


module.exports = class EntitySystem
{
  constructor(entityFactory)
  {
    this.entityFactory = entityFactory;
    this.entities = [];
  }

  create(name, id, options)
  {
    let entity = this.entityFactory.create(name, id, options);
    this.entities.push(entity);
    return this;
  }

  update(time)
  {
    for (let entity of this.entities) {
      entity.update(time);
    }
  }
}
