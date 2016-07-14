'use strict';

let
  Tree   = require('./Tree'),
  Ghost  = require('./Ghost'),
  Ground = require('./Ground')
;

module.exports = class EntityFactory
{
  constructor()
  {
    this.entities = {};

    this.register('tree', Tree);
    this.register('ghost', Ghost);
    this.register('ground', Ground);
  }

  register(name, entity)
  {
    this.entities[name] = entity;
  }

  create(name, id, options = {})
  {
    let EntityClass = this.entities[name];
    let entityInstance = EntityClass.create(id, options);

    return entityInstance;
  }
}
