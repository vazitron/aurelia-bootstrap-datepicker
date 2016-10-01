'use strict';

System.register(['./aurelia-bootstrap-datepicker'], function (_export, _context) {
  "use strict";

  var AureliaBootstrapDatepicker;
  function configure(config) {
    config.globalResources('./aurelia-bootstrap-datepicker');
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaBootstrapDatepicker) {
      AureliaBootstrapDatepicker = _aureliaBootstrapDatepicker.AureliaBootstrapDatepicker;
    }],
    execute: function () {
      _export('AureliaBootstrapDatepicker', AureliaBootstrapDatepicker);
    }
  };
});