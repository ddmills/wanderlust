'use strict';

let MeshComponent = require('./components/MeshComponent');
let Entity = require('./Entity');

let v = require('../utilities/Vector');
let Random = require('../utilities/Random');

module.exports = class Tree extends Entity
{
  constructor(id)
  {
    super(id);

    let random = new Random(this.id);

    console.log('create tree', this.id, random.int(0, 100));

    this.position.x = random.int(-50, 50);
    this.position.y = 0;
    this.position.z = random.int(-50, 50);

    this.rotation.y = random.float * (Math.PI * 2);
    this.rotation.x = random.float * 0.15;
    this.rotation.z = random.float * 0.15;

    let scaling = 0.75 + random.float * 2;

    this.scaling.y = scaling;
    this.scaling.x = scaling;
    this.scaling.z = scaling;

    this.visible = true;

  }
}