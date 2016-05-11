import {customElement, bindable, inject} from 'aurelia-framework';
import 'bootstrap-datepicker';
import {EventAggregator} from 'aurelia-event-aggregator';

import './aurelia-bootstrap-datepicker.css';

@customElement('bootstrap-datepicker')
@bindable('value')
@inject(EventAggregator)
export class AureliaBootstrapDatepicker {
  @bindable dpOptions;

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  attached() {
    let self = this;
    $(this.datepicker).datepicker(this.dpOptions)
      .on('changeDate', function(e) {
        self.eventAggregator.publish('DATEPICKER:changeDate', {event: e});
      });
  }
}
