'use strict';

module.exports = class Vector
{
  constructor(x, y, z)
  {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  serialize()
  {
    return {
      x: this.x,
      y: this.y,
      z: this.z
    };
  }

  clone()
  {
    return new Vector(this.x, this.y, this.z);
  }
}
