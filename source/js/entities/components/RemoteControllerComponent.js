'use strict';

let
  Vector = require('../../utilities/Vector'),
  Component = require('./Component')
;


module.exports = class RemoteControllerComponent extends Component
{
  applyConfiguration(configuration)
  {
    if (configuration.position) {
      let position = new Vector(configuration.position.x, configuration.position.y, configuration.position.z);
      this.entity.position = position;
    }
  }
}
