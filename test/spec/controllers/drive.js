'use strict';

describe('Controller: DriveCtrl', function () {

  // load the controller's module
  beforeEach(module('hitchARideApp'));

  var DriveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    DriveCtrl = $controller('DriveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
