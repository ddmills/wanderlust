'use strict';

let
  Mesh    = require('./Mesh'),
  babylon = require('babylon'),
  Random  = require('../utilities/Random'),
  v       = require('../utilities/Vector')
;

module.exports = class Tree extends Mesh
{
  constructor(id)
  {
    super('tree', id);
  }

  setAssets(assetLibrary)
  {
    this.asset = assetLibrary.get('tree-1');
  }

  add(scene)
  {
    let random = new Random(this.id);

    let x = random.int(-50, 50);
    let z = random.int(-50, 50);

    this.position = v(x, 0, z);

    this.rotation.y = random.float * (Math.PI * 2);
    this.rotation.x = random.float * 0.15;
    this.rotation.z = random.float * 0.15;

    let scaling = 0.75 + random.float * 2;

    this.scaling.y = scaling;
    this.scaling.x = scaling;
    this.scaling.z = scaling;

    this.visible = true;
  }
}
