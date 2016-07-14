'use strict';

let
  Vector = require('../utilities/Vector'),
  EventEmitter = require('event-emitter-es6')
;


module.exports = class Entity extends EventEmitter
{
  constructor(id, configuration)
  {
    super();

    this.id = id;
    this.components = [];
    this.activeComponents = [];

    this.active = false;

    this.visible = true;
    this._scaling = new Vector(1, 1, 1);
    this._rotation = new Vector(0, 0, 0);
    this._position = new Vector(0, 0, 0);

    this.applyConfiguration(configuration);
  }

  applyConfiguration(configuration)
  {
    for (let component of this.components) {
      component.applyConfiguration(configuration);
    }
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
      component.rateUpdate(time);
    }
  }

  emitChange(name, previous, current)
  {
    this.emitSync(`change-${name}`, { previous, current });
  }

  get active() {
    return this._active;
  }

  get scaling() {
    return this._scaling.clone();
  }

  get rotation() {
    return this._rotation.clone();
  }

  get position() {
    return this._position.clone();
  }

  set active(value)
  {
    let previous = this._active || value;
    this._active = value;
    this.emitChange('active', previous, value);
  }

  set scaling(value)
  {
    let previous = this._scaling || value;
    this._scaling = value.clone();
    this.emitChange('scaling', previous.clone(), value.clone());
  }

  set rotation(value)
  {
    let previous = this._rotation || value;
    this._rotation = value.clone();
    this.emitChange('rotation', previous.clone(), value.clone());
  }

  set position(value)
  {
    let previous = this._position || value;
    this._position = value.clone();
    this.emitChange('position', previous.clone(), value.clone());
  }
}
