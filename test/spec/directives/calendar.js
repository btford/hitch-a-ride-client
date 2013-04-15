'use strict';

describe('Directive: calendar', function () {
  beforeEach(module('hitchARideApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<calendar></calendar>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the calendar directive');
  }));
});
