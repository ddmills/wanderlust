'use strict';

let
  Tree   = require('./Tree'),
  Ghost  = require('./Ghost'),
  Ground = require('./Ground')
;

module.exports = class EntityFactory
{

  constructor(seed = 0)
  {
    this.id = seed;
    this.entities = {};

    this.register('tree', Tree);
    this.register('ghost', Ghost);
    this.register('ground', Ground);
  }

  register(name, entity)
  {
    this.entities[name] = entity;
  }

  create(name, options)
  {
    let EntityClass = this.entities[name];
    let entityInstance = EntityClass.create(++this.id, options);

    return entityInstance;
  }

}
