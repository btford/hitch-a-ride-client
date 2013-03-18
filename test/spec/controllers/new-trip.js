'use strict';

describe('Controller: NewTripCtrl', function () {

  // load the controller's module
  beforeEach(module('hitchARideApp'));

  var NewTripCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    NewTripCtrl = $controller('NewTripCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
