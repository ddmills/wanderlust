'use strict';

let babylon = require('babylon');

module.exports = function c(r, g, b) {
  return new babylon.Color3.FromInts(r, g, b);
}
