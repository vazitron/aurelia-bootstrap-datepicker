import {customElement, bindable, bindingMode} from 'aurelia-framework';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css!'

@customElement('bootstrap-datepicker')
export class AureliaBootstrapDatepicker {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

  attached() {
    let self = this;
    let jq = $(this.element);
    jq.datepicker(jq.data())
      .on('changeDate', function(e) {
        let changeEvent = new CustomEvent('input', {
            detail: {
                value: e.val
            },
            bubbles: true
        });
  
        this.element.dispatchEvent(changeEvent);
      });
  }

  detached() {
    $(this.element).datepicker('destroy').off('changeDate');
  }
}
