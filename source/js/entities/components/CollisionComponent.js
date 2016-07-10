'use strict';

let
  Component = require('./Component'),
  Vector = require('../../utilities/Vector'),
  babylon = require('babylon')
;


module.exports = class CollisionComponent extends Component
{
  constructor(options)
  {
    super();
    this.scaling = options.scaling;
    this.offset = options.offset;
  }

  onAttach()
  {
    this.active = this.entity.active;

    this.asset.checkCollisions = true;
    this.asset.isVisible = false;

    this.matchEntityPhysical();

    if (this.active) {
      this.update = this.matchEntityPhysical;
    }
  }

  matchEntityPhysical(time)
  {
    this.asset.scaling = Vector.Hadamard(this.scaling, this.entity.scaling);
    this.asset.position = this.entity.position;
    this.asset.rotation = this.entity.rotation;

    this.asset.translate(new Vector(1, 0, 0), this.offset.x, babylon.Space.LOCAL);
    this.asset.translate(new Vector(0, 1, 0), this.offset.y, babylon.Space.LOCAL);
    this.asset.translate(new Vector(0, 0, 1), this.offset.z, babylon.Space.LOCAL);
  }
}
