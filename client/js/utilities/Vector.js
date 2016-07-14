'use strict';

let babylon = require('babylon');

module.exports = class Vector extends babylon.Vector3
{
  static Hadamard(v1, v2)
  {
    return new Vector(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
  }
}
