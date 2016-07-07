'use strict';

let Vector = require('../utilities/Vector');

module.exports = class Entity
{

  constructor(id)
  {
    this.id = id;
    this.components = [];

    this.position = new Vector(0, 0, 0);
    this.rotation = new Vector(0, 0, 0);
    this.scaling = new Vector(0, 0, 0);
    this.visible = true;
  }

  addComponent(component)
  {
    component.entity = this;
    this.components.push(component);
  }

  update()
  {
    for (let component of this.components) {
      component.update();
    }
  }

}
