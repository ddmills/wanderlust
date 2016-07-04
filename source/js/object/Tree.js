'use strict';

let
  Mesh    = require('./Mesh'),
  babylon = require('babylon')
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
    console.log(`add ${this.name} to scene`);
    this.visible = true;
  }
}
