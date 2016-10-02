define(['exports', 'aurelia-framework', 'bootstrap-datepicker', 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css!'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AureliaBootstrapDatepicker = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var AureliaBootstrapDatepicker = exports.AureliaBootstrapDatepicker = (_dec = (0, _aureliaFramework.customElement)('bootstrap-datepicker'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
    function AureliaBootstrapDatepicker(element) {
      _classCallCheck(this, AureliaBootstrapDatepicker);

      _initDefineProp(this, 'value', _descriptor, this);

      this.element = element;
    }

    AureliaBootstrapDatepicker.prototype.attached = function attached() {
      var self = this;
      var jq = $(this.element);
      transformOptions(jq);
      jq.datepicker(jq.data()).on('changeDate', function (e) {
        var changeEvent = new CustomEvent('input', {
          detail: {
            value: e.date
          },
          bubbles: true
        });

        self.element.dispatchEvent(changeEvent);
      });
    };

    AureliaBootstrapDatepicker.prototype.detached = function detached() {
      $(this.element).datepicker('destroy').off('changeDate');
    };

    AureliaBootstrapDatepicker.prototype.transformOption = function transformOption(jqElem) {
      if (jqElem.data('date-min-today')) {
        jqElem.data('date-start-date', '0d');
      }
      if (jqElem.data('date-max-today')) {
        jqElem.data('date-end-date', '0d');
      }
      if (jqElem.data('date-birthday')) {
        var date = new Date();
        var todayMinus18 = date.getDate() + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear() - 18);
        jqElem.data('date-end-date', todayMinus18);
      }
    };

    return AureliaBootstrapDatepicker;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});