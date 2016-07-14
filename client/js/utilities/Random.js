'use strict';

module.exports = class Random
{
  constructor(seed)
  {
    this.seed = (seed == undefined) ? Math.random() : seed;
  }

  get bool()
  {
    return this.float > 0.5;
  }

  int(min, max)
  {
    return Math.floor(this.float * (max-min+1) + min);
  }

  get float()
  {
    let x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

}
