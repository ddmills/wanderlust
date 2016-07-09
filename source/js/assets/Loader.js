'use strict';

let
  Q       = require('q'),
  babylon = require('babylon')
;

module.exports = class Loader
{
  constructor(library, scene)
  {
    this.library = library;
    this.scene = scene;
    this.assetsManager = new babylon.AssetsManager(this.scene);
  }

  loadMesh(name)
  {
    let filename = `${name}.babylon`;
    let meshURL = '/resources/meshes/';

    let task = this.assetsManager.addMeshTask(name, '', meshURL, filename);

    task.onSuccess = (content) => {
      for (let mesh of content.loadedMeshes) {
        mesh.isVisible = false;
        this.library.registerMesh(mesh.name, mesh);
      }
    }

    return this;
  }

  load()
  {
    let deferred = Q.defer();

    this.assetsManager.onFinish = deferred.resolve;
    this.assetsManager.load();

    return deferred.promise;
  }
}
