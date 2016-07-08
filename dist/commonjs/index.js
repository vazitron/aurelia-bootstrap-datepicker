'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AureliaBootstrapDatepicker = undefined;
exports.configure = configure;

var _aureliaBootstrapDatepicker = require('./aurelia-bootstrap-datepicker');

function configure(config) {
  config.globalResources('./aurelia-bootstrap-datepicker');
}
exports.AureliaBootstrapDatepicker = _aureliaBootstrapDatepicker.AureliaBootstrapDatepicker;