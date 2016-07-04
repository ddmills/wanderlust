/**
 * A component is a basic object within the game world.
 *
 */
'use strict';

let
  Mesh    = require('../components/Mesh'),
  babylon = require('babylon')
;

module.exports = class Block extends Mesh
{
  constructor(id)
  {
    super('block', id);
  }

  add(scene)
  {
    console.log(`add ${this.name} to scene`);
    this.asset = babylon.Mesh.CreateBox('block', 1, scene);
  }
}
