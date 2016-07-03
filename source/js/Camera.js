let babylon = require('babylon');

module.exports = class Camera extends babylon.FreeCamera
{

  constructor(scene, canvas)
  {
    super('FreeCamera', new babylon.Vector3(0, 1, -5), scene);

    this.scene = scene;
    this.canvas = canvas;

    this.lowerRadiusLimit = 1.35;
    this.upperRadiusLimit = 6;
    this.wheelPrecision = 100;
    this.checkCollisions = true;
    this.applyGravity = true;
    this.ellipsoid = new babylon.Vector3(.5, 0.4, .4);

    this.keysUp = [87]; // W
    this.keysDown = [83]; // S
    this.keysLeft = [65]; // A
    this.keysRight = [68]; // D

    this.speed = 1;
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
