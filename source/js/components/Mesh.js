/**
 * A component is a basic object within the game world.
 *
 */
'use strict';

let
  Component = require('../component/Component'),
  babylon   = require('babylon')
;

module.exports = class Mesh extends Component
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
