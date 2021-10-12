(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinMultiPlatformLibrary'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinMultiPlatformLibrary'.");
    }root.KotlinMultiPlatformLibrary = factory(typeof KotlinMultiPlatformLibrary === 'undefined' ? {} : KotlinMultiPlatformLibrary, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function OperateEncoder() {
  }
  OperateEncoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OperateEncoder',
    interfaces: []
  };
  function OperationFactory() {
    OperationFactory_instance = this;
  }
  OperationFactory.prototype.createOperation = function () {
    return JsOpEncoder_getInstance();
  };
  OperationFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OperationFactory',
    interfaces: []
  };
  var OperationFactory_instance = null;
  function OperationFactory_getInstance() {
    if (OperationFactory_instance === null) {
      new OperationFactory();
    }return OperationFactory_instance;
  }
  function JsOpEncoder() {
    JsOpEncoder_instance = this;
  }
  JsOpEncoder.prototype.operate_za3lpa$ = function (src) {
    println('Hello I am JS');
    return src + src | 0;
  };
  JsOpEncoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsOpEncoder',
    interfaces: [OperateEncoder]
  };
  var JsOpEncoder_instance = null;
  function JsOpEncoder_getInstance() {
    if (JsOpEncoder_instance === null) {
      new JsOpEncoder();
    }return JsOpEncoder_instance;
  }
  function randomID() {
    return 'js';
  }
  var package$org = _.org || (_.org = {});
  var package$operation = package$org.operation || (package$org.operation = {});
  package$operation.OperateEncoder = OperateEncoder;
  Object.defineProperty(package$operation, 'OperationFactory', {
    get: OperationFactory_getInstance
  });
  Object.defineProperty(package$operation, 'JsOpEncoder', {
    get: JsOpEncoder_getInstance
  });
  package$operation.randomID = randomID;
  Kotlin.defineModule('KotlinMultiPlatformLibrary', _);
  return _;
}));

//# sourceMappingURL=KotlinMultiPlatformLibrary.js.map
