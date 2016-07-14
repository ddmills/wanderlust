'use strict';

let
  Entity = require('./Entity'),
  MeshComponent = require('./components/MeshComponent')
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
    let ground = new Ground(id);

    ground
      .addComponent(new MeshComponent({
        meshAsset: 'ground',
        collision: true
      }))
      .applyConfiguration(configuration);

    return ground;
  }
}
