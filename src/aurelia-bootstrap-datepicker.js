import {customElement, bindable, bindingMode} from 'aurelia-framework';
import 'bootstrap-datepicker';

@customElement('bootstrap-datepicker')
export class AureliaBootstrapDatepicker {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

  attached() {
    let self = this;
    let jq = $(this.datepicker);
    jq.datepicker(jq.data())
      .on('changeDate', function(e) {
        self.value = self.datepicker.value;
      });
  }
}
