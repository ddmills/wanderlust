'use strict';

let
  Vector = require('../../utilities/Vector'),
  Component = require('./Component')
;


module.exports = class TransformControllerComponent extends Component
{
  applyConfiguration(configuration)
  {
    if (configuration.position) {
      this.entity.position = new Vector(
        configuration.position.x,
        configuration.position.y,
        configuration.position.z
      );
    }

    if (configuration.rotation) {
      this.entity.rotation = new Vector(
        configuration.rotation.x,
        configuration.rotation.y,
        configuration.rotation.z
      );
    }

    if (configuration.scaling) {
      this.entity.scaling = new Vector(
        configuration.scaling.x,
        configuration.scaling.y,
        configuration.scaling.z
      );
    }

    this.entity.visible = !!configuration.visible;
  }
}
