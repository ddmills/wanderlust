'use strict';

let
  Assets = require('../../assets/Assets'),
  Component = require('./Component')
;

module.exports = class MeshComponent extends Component
{
  constructor(options = {})
  {
    super();

    this.mesh = Assets.mesh(options.meshAsset);
    this.mesh.checkCollisions = !!options.collision;
  }

  matchEntityPhysical(time)
  {
    this.mesh.scaling = this.entity.scaling;
    this.mesh.position = this.entity.position;
    this.mesh.rotation = this.entity.rotation;
    this.mesh.isVisible = this.entity.visible;
  }

  onAttach()
  {
    this.active = this.entity.active;

    this.matchEntityPhysical();

    if (this.active) {
      this.update = this.matchEntityPhysical;
    }
  }
}
