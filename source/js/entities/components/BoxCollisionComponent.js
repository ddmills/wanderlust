'use strict';

let
  Assets    = require('../../assets/Assets'),
  CollisionComponent = require('./CollisionComponent')
;

module.exports = class BoxCollisionComponent extends CollisionComponent
{

  constructor(options)
  {
    super(options);
    this.asset = Assets.mesh('box');
  }

}
