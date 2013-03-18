'use strict';

describe('Directive: navBarTop', function () {
  beforeEach(module('hitchARideApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<nav-bar-top></nav-bar-top>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the navBarTop directive');
  }));
});
