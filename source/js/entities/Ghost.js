'use strict';

let
  Entity = require('./Entity'),
  Random = require('../utilities/Random'),
  Vector = require('../utilities/Vector'),
  MeshComponent = require('./components/MeshComponent'),
  BoxCollisionComponent = require('./components/BoxCollisionComponent')
;


module.exports = class Ghost extends Entity
{
  constructor(id)
  {
    super(id);

    this.random = new Random(this.id);

    this.position.x = this.random.int(-50, 50);
    this.position.y = 2;
    this.position.z = this.random.int(-50, 50);

    this.visible = true;
  }

  update()
  {
    this.position.x += this.random.float - .5;
    this.position.z += this.random.float - .5;

    super.update();
  }

  static create(id)
  {
    let ghost = new Ghost(id);

    ghost
      .addComponent(new MeshComponent('box'))
      .update();

    return ghost;
  }
}
