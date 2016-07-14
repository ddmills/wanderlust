'use strict';

let
  Random = require('../../utilities/Random'),
  Vector = require('../../utilities/Vector'),
  Component = require('./Component')
;


module.exports = class LERPComponent extends Component
{
  onAttach()
  {
    this.active = true;
    this.updating = false;
    this.targetPosition = this.entity.position;

    this.entity.on('change-position', this.updateTarget.bind(this));
  }

  updateTarget(value)
  {
    if (this.updating) {
      return false;
    }

    this.targetPosition = value.current;
    this.entity._position = value.previous;
  }

  applyLerp()
  {
    this.entity.position = Vector.Lerp(this.entity.position, this.targetPosition, .005);
  }

  update(time)
  {
    this.updating = true;
    this.applyLerp();
    this.updating = false;
  }
}
