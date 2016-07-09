'use strict';

let
  Entity = require('./Entity'),
  MeshComponent = require('./components/MeshComponent')
;


module.exports = class Ground extends Entity
{
  constructor(id)
  {
    super(id);

    this.visible = true;
  }

  static create(id)
  {
    let ground = new Ground(id);

    ground
      .addComponent(new MeshComponent('ground', { collision : true }))
      .update();

    return ground;
  }
}
