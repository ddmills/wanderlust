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

  updateScaling(value)
  {
    this.mesh.scaling = value.current;
  }

  updatePosition(value)
  {
    this.mesh.position = value.current;
  }

  updateRotation(value)
  {
    this.mesh.rotation = value.current;
  }

  updateVisible(value)
  {
    this.mesh.isVisible = value.current;
  }

  onAttach()
  {
    this.mesh.position = this.entity.position;
    this.mesh.scaling = this.entity.scaling;
    this.mesh.rotation = this.entity.rotation;
    this.mesh.isVisible = this.entity.visible;

    this.entity.on('change-position', this.updatePosition.bind(this));
    this.entity.on('change-scaling', this.updateScaling.bind(this));
    this.entity.on('change-rotation', this.updateRotation.bind(this));
    this.entity.on('change-visible', this.updateVisible.bind(this));
  }
}
