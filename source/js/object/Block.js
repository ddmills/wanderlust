'use strict';

let
  Mesh    = require('./Mesh'),
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
    this.asset = babylon.Mesh.CreateBox('block', 1, scene);
  }
}
