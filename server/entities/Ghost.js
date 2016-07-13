'use strict';

let
  Entity = require('./Entity'),
  Vector = require('../utilities/Vector'),
  Random = require('../utilities/Random'),
  WanderComponent = require('./components/WanderComponent')
;


module.exports = class Ghost extends Entity
{
  constructor(id, configuration)
  {
    super(id, configuration);

    this.visible = true;
    this.active = true;

    this.random = new Random(this.id);
    this.position = new Vector(this.random.int(-50, 50), 2, this.random.int(-50, 50));
  }

  static create(id, configuration)
  {
    let ghost = new Ghost(id, configuration);

    ghost.addComponent(new WanderComponent());

    return ghost;
  }
}
