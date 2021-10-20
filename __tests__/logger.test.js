'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing the logging middleware.', () => {
  let request = { method: 'GET', path: '/person' };
  let response = {};
  let next = jest.fn(); // a jest "spy"
  console.log = jest.fn();

  it('Should be able to log a method', () => {
    logger(request, response, next);

    expect(console.log).toHaveBeenCalledWith('GET /person');
    expect(next).toHaveBeenCalled();
  });

  it('Should throw an error when a different method is called.', () => {
    request.method = 'PUT';

    logger(request, response, next);
    expect(next).toHaveBeenCalledWith('Something went wrong.');
  });
});
