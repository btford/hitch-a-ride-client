'use strict';

describe('Directive: map', function () {
  beforeEach(module('hitchARideApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<map></map>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the map directive');
  }));
});
