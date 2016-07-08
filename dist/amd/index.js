define(['exports', './aurelia-bootstrap-datepicker'], function (exports, _aureliaBootstrapDatepicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AureliaBootstrapDatepicker = undefined;
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./aurelia-bootstrap-datepicker');
  }
  exports.AureliaBootstrapDatepicker = _aureliaBootstrapDatepicker.AureliaBootstrapDatepicker;
});