import {customElement, bindable, inject} from 'aurelia-framework';
import 'bootstrap-datepicker';

@customElement('bootstrap-datepicker')
@inject(Element)
export class AureliaBootstrapDatepicker {
  @bindable dpOptions;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

  constructor(element) {
    this.element = element;
    console.log(element);
  }

  attached() {
    let self = this;
    $(this.datepicker).datepicker(this.dpOptions)
      .on('change', function(e) {
        let changeDateEvent = new Event('Event');
        self.element.dispatchEvent(changeDateEvent);
      });
  }
}
