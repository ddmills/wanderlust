let
  Camera  = require('./../Camera'),
  babylon = require('babylon')
;

module.exports = class Scene extends babylon.Scene
{

  constructor(engine)
  {
    super(engine);
    this.engine = engine;
  }

  addGround()
  {
    let ground = babylon.Mesh.CreateGround("ground",  100,  100, 2, this);
    let material = new babylon.StandardMaterial("ground", this);

    material.diffuseColor = new babylon.Color3(.75, 1, .35);
    material.specularColor = new babylon.Color3(0, .1, .01);
    material.specularPower = 10;

    ground.material = material;
    ground.checkCollisions = true;
  }

  addSun()
  {
    let h = new babylon.HemisphericLight("hemi", new babylon.Vector3(0, 0.5, 0), this);
    h.intensity = 0.6;

    let d = new babylon.DirectionalLight("dir", new babylon.Vector3(0,-0.5,0.5), this);
    d.position = new babylon.Vector3(0.1,100,-100);
    d.intensity = 0.4;
    d.diffuse = babylon.Color3.FromInts(204,196,255);
  }

  addPlayerCamera()
  {
    this.activeCamera = new Camera(this, this.engine.getRenderingCanvas());
  }

  populate()
  {
    for (let i = 0; i < 15; i ++) {
      let cyl = babylon.Mesh.CreateCylinder("cylinder", i, 1, 1, 12, 1, this, true);

      let x = (Math.random() - .5) * 20;
      let z = (Math.random() - .5) * 20

      cyl.position.x = x;
      cyl.position.z = z
      cyl.position.y = .5;
      cyl.checkCollisions = true;
    }

    let sphere = babylon.Mesh.CreateSphere("sphere", 16, 1, this);
    sphere.position.y = 1
    sphere.position.z = 1

    this.addSun();
    this.addGround();
    this.addPlayerCamera();
  }

}
