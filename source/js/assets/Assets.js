'use strict';

let library = null;

module.exports = class Assets
{

  static initialize(lib)
  {
    library = lib;
  }

  static get(name)
  {
    return library.get(name);
  }

}
