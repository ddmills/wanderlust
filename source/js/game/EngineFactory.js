'use strict';

let babylon = require('babylon');

module.exports = class EngineFactory
{

  static create(canvas)
  {
    return new babylon.Engine(canvas);
  }

}
