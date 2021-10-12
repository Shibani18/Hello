(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'KotlinMultiPlatformLibrary', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('KotlinMultiPlatformLibrary'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinMultiPlatformLibrary-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinMultiPlatformLibrary-test'.");
    }if (typeof KotlinMultiPlatformLibrary === 'undefined') {
      throw new Error("Error loading module 'KotlinMultiPlatformLibrary-test'. Its dependency 'KotlinMultiPlatformLibrary' was not found. Please, check whether 'KotlinMultiPlatformLibrary' is loaded prior to 'KotlinMultiPlatformLibrary-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'KotlinMultiPlatformLibrary-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'KotlinMultiPlatformLibrary-test'.");
    }root['KotlinMultiPlatformLibrary-test'] = factory(typeof this['KotlinMultiPlatformLibrary-test'] === 'undefined' ? {} : this['KotlinMultiPlatformLibrary-test'], kotlin, KotlinMultiPlatformLibrary, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$KotlinMultiPlatformLibrary, $module$kotlin_test) {
  'use strict';
  var randomID = $module$KotlinMultiPlatformLibrary.org.operation.randomID;
  var equals = Kotlin.equals;
  var operation = $module$KotlinMultiPlatformLibrary.org.operation;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function OperationTest() {
  }
  OperationTest.prototype.testToOperate = function () {
    if (equals(randomID(), 'js')) {
      this.checkOperation_0(3, 6);
    }if (equals(randomID(), 'jvm')) {
      this.checkOperation_0(3, 9);
    }if (equals(randomID(), 'native')) {
      this.checkOperation_0(3, 0);
    }};
  OperationTest.prototype.checkOperation_0 = function (input, expectedOutput) {
    assertEquals(expectedOutput, operation.OperationFactory.createOperation().operate_za3lpa$(input));
  };
  OperationTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OperationTest',
    interfaces: []
  };
  var package$org = _.org || (_.org = {});
  var package$testcommon = package$org.testcommon || (package$org.testcommon = {});
  package$testcommon.OperationTest = OperationTest;
  suite('org.testcommon', false, function () {
    suite('OperationTest', false, function () {
      test('testToOperate', false, function () {
        return (new OperationTest()).testToOperate();
      });
    });
  });
  Kotlin.defineModule('KotlinMultiPlatformLibrary-test', _);
  return _;
}));

//# sourceMappingURL=KotlinMultiPlatformLibrary-test.js.map
