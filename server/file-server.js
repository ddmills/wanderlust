'use strict';

let
  nstatic = require('node-static'),
  http    = require('http')
;

let fileServer = new nstatic.Server('./build');

function handler(request, response) {
  request.addListener('end', () => {
    fileServer.serve(request, response);
  }).resume();
}

function start() {
  let app = http.createServer(handler);
  app.listen(80);

  return app;
}

module.exports = { start }
