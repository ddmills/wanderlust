'use strict';

let Block = require('../components/Block');
let Tree  = require('../components/Tree');

module.exports = class ComponentFactory
{

  constructor(scene, assetLibrary)
  {
    this.id = 0;
    this.components = {};

    this.scene = scene;
    this.assetLibrary = assetLibrary;

    this.register('tree', Tree);
    this.register('block', Block);
  }

  register(name, component)
  {
    this.components[name] = component;
  }

  create(name)
  {
    let Component = this.components[name];
    let componentInstance = new Component(++this.id);

    componentInstance.setAssets(this.assetLibrary);
    componentInstance.add(this.scene);

    return componentInstance;
  }

}
