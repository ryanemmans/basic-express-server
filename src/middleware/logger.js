'use strict';

module.exports = function (request, response, next) {
  console.log(`${request.method} ${request.path}`);

  let method = request.method;
  if (method === 'GET') {
    next();
  } else {
    next('Something went wrong.');
  }
};
