var should  = require('should');
var middleware = require('../index');

describe('middleware', function() {
  
  describe('#middleware', function() {
    it('should expose an express middleware', function(done) {
      middleware( {} , {} , function() {
        done();
      });
    });
  });

});
