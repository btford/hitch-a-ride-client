'use strict';

describe('Filter: dasherize', function () {

  // load the filter's module
  beforeEach(module('hitchARideApp'));

  // initialize a new instance of the filter before each test
  var dasherize;
  beforeEach(inject(function ($filter) {
    dasherize = $filter('dasherize');
  }));

  it('should return the input prefixed with "dasherize filter:"', function () {
    var text = 'angularjs';
    expect(dasherize(text)).toBe('dasherize filter: ' + text);
  });

});
