/**
 * A component is a basic object within the game world.
 *
 */
'use strict';

let
  GameObject = require('./GameObject'),
  babylon    = require('babylon')
;

module.exports = class Mesh extends GameObject
{
  constructor(name, id)
  {
    super(name, id);
  }

  set position(vector)
  {
    this.asset.position = vector;
  }

  get position()
  {
    return this.asset.position;
  }

  set visible(visiblity)
  {
    this.asset.isVisible = visiblity;
  }

  get visible()
  {
    return this.asset.isVisible;
  }
}
