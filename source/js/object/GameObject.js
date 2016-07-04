/**
 * A GameObject is a basic object within the game world.
 *
 */
'use strict';

module.exports = class GameObject
{
  constructor(name, id)
  {
    if (this.add === undefined) {
      throw new TypeError("Subclass must override 'add' method on GameObject.");
    }

    this.name = name;
    this.id = id;
  }
}
