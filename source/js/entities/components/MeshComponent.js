'use strict';

let
  Assets    = require('../../assets/Assets'),
  Component = require('./Component'),
  Random    = require('../../utilities/Random'),
  v         = require('../../utilities/Vector')
;

module.exports = class MeshComponent extends Component
{
  constructor(meshName)
  {
    super();
    this.asset = Assets.get(meshName);
    this.asset.checkCollisions = false;
  }

  update()
  {
    this.asset.scaling = this.entity.scaling;
    this.asset.position = this.entity.position;
    this.asset.rotation = this.entity.rotation;
    this.asset.isVisible = this.entity.visible;
  }
}
