'use strict';

let
  Loader = require('./Loader')
;

module.exports = class AssetLibrary
{
  constructor(scene)
  {
    this.scene = scene;
    this.meshAssets = {};
    this.materialAssets = {};
    this.lampAssets = {};
    this.loader = new Loader(this, this.scene);
  }

  registerMesh(name, mesh)
  {
    this.meshAssets[name] = mesh;
  }

  registerMaterial(name, material)
  {
    this.materialAssets[name] = material;
  }

  mesh(name)
  {
    let mesh = this.meshAssets[name];
    return mesh.createInstance(name);
  }

  material(name)
  {
    return this.materialAssets[name];
  }

  lamp(name)
  {
    return this.lampAssets[name];
  }

  load()
  {
    this.loader.loadMesh('trees');

    return this.loader.load();
  }
}
