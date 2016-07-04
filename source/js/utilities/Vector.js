'use strict';

let babylon = require('babylon');

module.exports = function v(x, y, z) {
  return new babylon.Vector3(x, y, z);
}
