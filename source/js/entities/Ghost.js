'use strict';

let
  Entity = require('./Entity'),
  Random = require('../utilities/Random'),
  Vector = require('../utilities/Vector'),
  MeshComponent = require('./components/MeshComponent'),
  LERPComponent = require('./components/LERPComponent'),
  RemoteControllerComponent = require('./components/RemoteControllerComponent')
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

    ghost
      .addComponent(new RemoteControllerComponent())
      .addComponent(new LERPComponent())
      .addComponent(new MeshComponent({ meshAsset: 'box' }));

    return ghost;
  }
}
