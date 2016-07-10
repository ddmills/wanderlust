'use strict';

let Vector = require('../utilities/Vector');

module.exports = class Entity
{

  constructor(id)
  {
    this.id = id;

    this.components = [];
    this.activeComponents = [];

    this.active = false;
    this.visible = true;
    this.scaling = new Vector(1, 1, 1);
    this.rotation = new Vector(0, 0, 0);
    this.position = new Vector(0, 0, 0);
  }

  addComponent(component)
  {
    component.entity = this;
    this.components.push(component);
    component.onAttach();

    if (component.active) {
      this.activeComponents.push(component);
    }

    return this;
  }

  update(time)
  {
    for (let component of this.activeComponents) {
      component.update(time);
    }
  }

}
