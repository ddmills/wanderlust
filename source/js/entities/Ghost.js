'use strict';

let
  Entity = require('./Entity'),
  Random = require('../utilities/Random'),
  MeshComponent = require('./components/MeshComponent'),
  WanderBehavior = require('./behaviors/WanderBehavior')
;


module.exports = class Ghost extends Entity
{
  constructor(id)
  {
    super(id);

    this.visible = true;
    this.active = true;

    this.random = new Random(this.id);

    this.position.x = this.random.int(-50, 50);
    this.position.y = 2;
    this.position.z = this.random.int(-50, 50);
  }

  static create(id)
  {
    let ghost = new Ghost(id);

    ghost
      .addComponent(new MeshComponent({ meshAsset: 'box' }))
      .addComponent(new WanderBehavior());

    return ghost;
  }
}
