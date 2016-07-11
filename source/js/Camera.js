let babylon = require('babylon');
let Vector = require('./utilities/Vector');

module.exports = class Camera extends babylon.FreeCamera
{

  constructor(scene, canvas)
  {
    super('FreeCamera', new Vector(0, 1, -5), scene);

    this.scene = scene;
    this.canvas = canvas;

    this.checkCollisions = true;
    this.applyGravity = true;
    this.ellipsoid = new Vector(.4, .5, .4);
    this.minZ = .1;

    this.keysUp = [87]; // W
    this.keysDown = [83]; // S
    this.keysLeft = [65]; // A
    this.keysRight = [68]; // D

    this.speed = 1.5;
    this.inertia = 0;
    this.angularSensibility = 300;

    this.setupPointerLock();
  }

  setupPointerLock()
  {
    this.canvas.addEventListener('click', this.canvas.requestPointerLock, false);

    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === this.canvas) {
        this.attachControl(this.canvas);
      } else {
        this.detachControl(this.canvas);
      }
    }, false);
  }

}
