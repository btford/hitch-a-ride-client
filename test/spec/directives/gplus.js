'use strict';

describe('Directive: gplus', function () {
  beforeEach(module('hitchARideApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<gplus></gplus>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the gplus directive');
  }));
});
