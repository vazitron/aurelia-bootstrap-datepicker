'use strict';

System.register(['./aurelia-bootstrap-datepicker'], function (_export, _context) {
  "use strict";

  var AureliaBootstrapDatepicker;
  return {
    setters: [function (_aureliaBootstrapDatepicker) {
      AureliaBootstrapDatepicker = _aureliaBootstrapDatepicker.AureliaBootstrapDatepicker;
    }],
    execute: function () {
      function configure(config) {
        config.globalResources('./aurelia-bootstrap-datepicker');
      }

      _export('configure', configure);

      _export('AureliaBootstrapDatepicker', AureliaBootstrapDatepicker);
    }
  };
});