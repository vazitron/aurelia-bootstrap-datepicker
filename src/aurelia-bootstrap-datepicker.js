import {customElement, bindable, bindingMode} from 'aurelia-framework';
import 'bootstrap-datepicker';

@customElement('bootstrap-datepicker')
export class AureliaBootstrapDatepicker {
  @bindable dpOptions;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

  attached() {
    let self = this;
    $(this.datepicker).datepicker(this.dpOptions)
      .on('change', function(e) {
        self.value = self.datepicker.value;
      });
  }
}
