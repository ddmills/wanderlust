'use strict';

let library = null;

module.exports = class Assets
{

  static initialize(lib)
  {
    library = lib;
  }

  static mesh(name)
  {
    return library.mesh(name);
  }

  static material(name)
  {
    return library.material(name);
  }

}
