'use strict';

let
  Entity = require('./Entity'),
  Random = require('../utilities/Random'),
  Vector = require('../utilities/Vector')
;


module.exports = class Tree extends Entity
{
  constructor(id, configuration)
  {
    super(id, configuration);

    let random = new Random(this.id);

    this.position = new Vector(
      random.int(-50, 50),
      0,
      random.int(-50, 50)
    );

    this.rotation = new Vector(
      random.float * 0.15,
      random.float * (Math.PI * 2),
      random.float * 0.15
    );

    let factor = 0.75 + random.float * 2;
    this.scaling = new Vector(factor, factor, factor);

    this.visible = true;
    this.active = false;
  }

  static create(id, configuration)
  {
    return new Tree(id, configuration);
  }
}
