'use strict';

let Block  = require('./Block');
let Tree   = require('./Tree');
let Ground = require('./Ground');

module.exports = class GameObjectFactory
{

  constructor(scene, assetLibrary)
  {
    this.id = 0;
    this.gameObjects = {};

    this.scene = scene;
    this.assetLibrary = assetLibrary;

    this.register('tree', Tree);
    this.register('block', Block);
    this.register('ground', Ground);
  }

  register(name, gameObject)
  {
    this.gameObjects[name] = gameObject;
  }

  create(name)
  {
    let GameObject = this.gameObjects[name];
    let gameObjectInstance = new GameObject(++this.id);

    gameObjectInstance.setAssets(this.assetLibrary);
    gameObjectInstance.add(this.scene);

    return gameObjectInstance;
  }

}
