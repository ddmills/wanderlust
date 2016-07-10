'use strict';

module.exports = class Component
{
  constructor()
  {
    this.entity = null;
    this.active = false;

    this.lastUpdate = 0;
    this.updateRate = 0;
    this.updateCounter = 0;
  }

  onAttach() { }

  update(time) { }

  rateUpdate(time)
  {
    this.lastUpdate = time.now;
    this.updateCounter += time.delta;

    if (this.updateCounter >= this.updateRate) {
      this.updateCounter -= this.updateRate;
      this.update(time);
    }
  }
}
