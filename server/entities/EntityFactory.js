'use strict';

let
  Tree   = require('./Tree'),
  Ground = require('./Ground'),
  Ghost  = require('./Ghost')
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

  create(name, id, options)
  {
    let EntityClass = this.entities[name];
    let entityInstance = EntityClass.create(id, options);
    entityInstance.name = name;

    return entityInstance;
  }
}
