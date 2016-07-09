'use strict';

let
  Game          = require('./Game'),
  Scene         = require('./Scene'),
  Client        = require('../network/Client'),
  Room          = require('../room/Room'),
  EngineFactory = require('./EngineFactory'),
  AssetLibrary  = require('../assets/AssetLibrary'),
  Assets        = require('../assets/Assets'),
  Color         = require('../utilities/Color'),
  babylon       = require('babylon')
;


module.exports = class GameFactory
{

  static create()
  {
    let canvas = document.getElementById('game-area');
    let engine = EngineFactory.create(canvas);
    let client = new Client();
    let scene  = new Scene(engine);
    let assets = new AssetLibrary(scene);


    let sphere = babylon.Mesh.CreateSphere("sphere", 16, 1, scene);
    sphere.isVisible = false;
    assets.registerMesh('sphere', sphere);

    let box = babylon.Mesh.CreateBox('box', 1, scene);
    box.isVisible = false;
    assets.registerMesh('box', box);

    let ground = babylon.Mesh.CreateGround('ground',  100,  100, 2, scene);
    let groundMaterial = new babylon.StandardMaterial('ground', scene);
    groundMaterial.diffuseColor = new Color(175, 185, 115);
    groundMaterial.specularColor = new Color(0, 0, 0);
    groundMaterial.specularPower = 10;
    ground.material = groundMaterial;
    ground.isVisible = false;
    assets.registerMesh('ground', ground);

    let room   = new Room(client);

    Assets.initialize(assets);

    return new Game(engine, client, canvas, scene, assets, room);
  }

}
