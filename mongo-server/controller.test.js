const controller = require('./controller.js');
const request = require('request');


describe('Controller functions properly', () => {
  it('should respond with 200 for a GET request to server', async () => {
    request('https://localhost:3001/products', () => {
      expect(controller.get().toBe(200));
    })
  })
});


