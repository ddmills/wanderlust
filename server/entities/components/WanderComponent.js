'use strict';

let
  Random = require('../../utilities/Random'),
  Component = require('./Component')
;


module.exports = class WanderComponent extends Component
{
  onAttach()
  {
    this.active = true;
    this.random = new Random(this.entity.id);
    this.wanderIncrements = 30;

    this.updateRate = 3000;
    this.updateCounter = this.random.int(0, this.updateRate);
    this.update();
  }

  update(time)
  {
    let position = this.entity.position;
    let x = position.x + this.random.int(-this.wanderIncrements, this.wanderIncrements);
    let z = position.z + this.random.int(-this.wanderIncrements, this.wanderIncrements);

    x = x > 50 ? 50 : x;
    x = x < -50 ? -50 : x;

    z = z > 50 ? 50 : z;
    z = z < -50 ? -50 : z;

    position.x = x;
    position.z = z;

    this.entity.position = position;
  }
}
