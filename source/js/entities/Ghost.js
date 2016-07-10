'use strict';

let
  Entity = require('./Entity'),
  Random = require('../utilities/Random'),
  Vector = require('../utilities/Vector'),
  MeshComponent = require('./components/MeshComponent'),
  WanderComponent = require('./components/WanderComponent'),
  LERPComponent = require('./components/LERPComponent')
;


module.exports = class Ghost extends Entity
{
  constructor(id)
  {
    super(id);

    this.visible = true;
    this.active = true;

    this.random = new Random(this.id);
    this.position = new Vector(this.random.int(-50, 50), 2, this.random.int(-50, 50));
  }

  static create(id)
  {
    let ghost = new Ghost(id);

    ghost
      .addComponent(new WanderComponent())
      .addComponent(new LERPComponent())
      .addComponent(new MeshComponent({ meshAsset: 'box' }));

    return ghost;
  }
}
