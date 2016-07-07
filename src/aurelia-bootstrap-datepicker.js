import {customElement, bindable, bindingMode, inject} from 'aurelia-framework';
import 'bootstrap-datepicker';

@customElement('bootstrap-datepicker')
@inject(Element)
export class AureliaBootstrapDatepicker {
  @bindable dpOptions;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

  constructor(element) {
    this.element = this.datepicker;
    console.log(element);
    console.log(this.element);
  }

  attached() {
    let self = this;
    $(this.datepicker).datepicker(this.dpOptions)
      .on('change', function(e) {
        console.log('fire event');
        let changeDateEvent = new Event('change');
        self.element.dispatchEvent(changeDateEvent);
      });
  }
}
