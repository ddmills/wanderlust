let
  Camera  = require('./../Camera'),
  babylon = require('babylon'),
  Vector  = require('../utilities/Vector'),
  c       = require('../utilities/Color')
;

module.exports = class Scene extends babylon.Scene
{
  constructor(engine)
  {
    super(engine);
    this.engine = engine;

    this.addSun();
    this.addPlayerCamera();

    var ssaoRatio = {
      ssaoRatio: 0.5, // Ratio of the SSAO post-process, in a lower resolution
      combineRatio: 1.0 // Ratio of the combine post-process (combines the SSAO and the scene)
    };

    var ssao = new babylon.SSAORenderingPipeline("ssao", this, ssaoRatio);
    ssao.fallOff = 0.000001;
    ssao.area = 1;
    ssao.radius = 0.0001;
    ssao.totalStrength = 1.0;
    ssao.base = 0.5;

    this.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("ssao", this.activeCamera);
    this.clearColor = c(214, 216, 245);
    this.ambientColor = c(50, 20, 15);
    this.collisionsEnabled = true;
  }

  addSun()
  {
    let h = new babylon.HemisphericLight('primary', new Vector(.1, 1, .1), this);
    h.intensity = 1;
    h.specular = c(255, 255, 255);

    let h2 = new babylon.HemisphericLight('back', new Vector(-.1, -1, -.1), this);
    h2.intensity = .5;
    h2.specular = c(0, 0, 0);
    h2.diffuse = c(200, 50, 255);
  }

  addPlayerCamera()
  {
    this.activeCamera = new Camera(this, this.engine.getRenderingCanvas());
  }
}
