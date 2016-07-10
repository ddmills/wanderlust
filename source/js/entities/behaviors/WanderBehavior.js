'use strict';

let
  Random = require('../../utilities/Random'),
  Component = require('../components/component')
;


module.exports = class WanderBehavior extends Component
{
  onAttach()
  {
    this.active = true;
    this.random = new Random(this.entity.id);
    this.updateRate = 500;
  }

  update(time)
  {
    this.entity.position.x += this.random.float - 0.5;
    this.entity.position.z += this.random.float - 0.5;
  }
}
