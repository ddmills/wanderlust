'use strict';

let
  Loader = require('./Loader')
;

module.exports = class AssetLibrary
{
  constructor(scene)
  {
    this.scene = scene;
    this.assets = {};
    this.loader = new Loader(this, this.scene);
  }

  register(name, asset)
  {
    this.assets[name] = asset;
  }

  get(name)
  {
    let asset = this.assets[name];
    return asset.createInstance(name);
  }

  load()
  {
    this.loader.loadMesh('trees');

    return this.loader.load();
  }
}
