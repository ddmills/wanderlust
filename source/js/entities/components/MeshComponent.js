'use strict';

let
  Assets    = require('../../assets/Assets'),
  Component = require('./Component')
;

module.exports = class MeshComponent extends Component
{
  constructor(meshName, options = {})
  {
    super();

    this.mesh = Assets.mesh(meshName);
    this.mesh.checkCollisions = !!options.collision;
  }

  update()
  {
    this.mesh.scaling = this.entity.scaling;
    this.mesh.position = this.entity.position;
    this.mesh.rotation = this.entity.rotation;
    this.mesh.isVisible = this.entity.visible;
  }
}
