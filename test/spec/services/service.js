'use strict';

describe('Service: Service', function () {

  // load the service's module
  beforeEach(module('angularYeoDemoApp'));

  // instantiate service
  var Service;
  beforeEach(inject(function (_Service_) {
    Service = _Service_;
  }));

  it('should do something', function () {
    expect(!!Service).toBe(true);
  });

});
