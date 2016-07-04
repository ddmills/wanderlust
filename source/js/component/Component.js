/**
 * A component is a basic object within the game world.
 *
 */
'use strict';

module.exports = class Component
{
  constructor(name, id)
  {
    if (this.add === undefined) {
      throw new TypeError("Subclass must override 'add' method on Component.");
    }

    this.name = name;
    this.id = id;
  }
}
