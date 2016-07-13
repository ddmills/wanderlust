'use strict';

let
  Entity = require('./Entity')
;


module.exports = class Ground extends Entity
{
  constructor(id, configuration)
  {
    super(id, configuration);
    this.visible = true;
  }

  static create(id, configuration)
  {
    return new Ground(id, configuration);
  }
}
