'use strict';


module.exports = class EntitySystem
{
  constructor(entityFactory)
  {
    this.entityFactory = entityFactory;
    this.entities = [];
  }

  create(name, options)
  {
    let entity = this.entityFactory.create(name, options);
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
