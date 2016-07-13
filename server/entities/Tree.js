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

    let scaling = 0.75 + random.float * 2;

    this.position = new Vector(random.int(-50, 50), 0, random.int(-50, 50));
    this.rotation = new Vector(random.float * 0.15, random.float * (Math.PI * 2), random.float * 0.15);
    this.scaling = new Vector(scaling, scaling, scaling);

    this.visible = true;
  }

  static create(id, configuration)
  {
    return new Tree(id, configuration);
  }
}
