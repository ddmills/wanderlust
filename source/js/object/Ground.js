'use strict';

let
  GameObject = require('./GameObject'),
  babylon    = require('babylon'),
  c          = require('../utilities/Color')
;

module.exports = class Ground extends GameObject
{
  constructor(id)
  {
    super('ground', id);
  }

  setAssets()
  {

  }

  add(scene)
  {
    let ground = babylon.Mesh.CreateGround('ground',  100,  100, 2, scene);
    let material = new babylon.StandardMaterial('ground', scene);

    material.diffuseColor = c(175, 185, 115);
    material.specularColor = c(0, 0, 0);
    material.specularPower = 10;

    ground.material = material;
    ground.checkCollisions = true;

    this.asset = ground;
  }
}
