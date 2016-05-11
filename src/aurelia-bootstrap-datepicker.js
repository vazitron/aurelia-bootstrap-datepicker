import {customElement, bindable, inject} from 'aurelia-framework';
import 'bootstrap-datepicker';

import './aurelia-bootstrap-datepicker.css';

@customElement('bootstrap-datepicker')
@bindable('value')
@inject(Element)
export class AureliaBootstrapDatepicker {
  @bindable dpOptions;

  constructor(element) {
    this.element = element;
  }

  attached() {
    let self = this;
    $(this.datepicker).datepicker(this.dpOptions)
      .on('changeDate', function(e) {
        let changeDateEvent = new CustomEvent('changeDate', {detail: {event: e}, bubbles: true});
        self.element.dispatchEvent(changeDateEvent);
      });
  }
}
