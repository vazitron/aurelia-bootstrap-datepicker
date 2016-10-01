import {customElement, bindable, bindingMode} from 'aurelia-framework';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/less/datepicker3.less!'

@customElement('bootstrap-datepicker')
export class AureliaBootstrapDatepicker {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

  attached() {
    let self = this;
    let jq = $(this.element);
    jq.datepicker(jq.data())
      .on('changeDate', function(e) {
        self.value = e.date;
      });
  }
}
