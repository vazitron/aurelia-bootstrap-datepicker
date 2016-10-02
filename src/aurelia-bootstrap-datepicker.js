import {inject, customElement, bindable, bindingMode} from 'aurelia-framework';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css!'

@customElement('bootstrap-datepicker')
@inject(Element)
export class AureliaBootstrapDatepicker {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  
  constructor(element) {
    this.element = element
  }

  attached() {
    let self = this;
    let jq = $(this.element);
    jq.datepicker(jq.data())
      .on('changeDate', function(e) {
        let changeEvent = new CustomEvent('input', {
            detail: {
                value: e.date
            },
            bubbles: true
        });
  
        self.element.dispatchEvent(changeEvent);
      });
    this.transformOptions(jq)
  }

  detached() {
    $(this.element).datepicker('destroy').off('changeDate');
  }
  
  transformOptions(jqElem) {
    if (jqElem.data('dateMinToday')) {
      jqElem.datepicker('startDate', new Date())
    }
    
    if (jqElem.data('dateMaxToday')) {
      jqElem.datepicker('endDate', new Date())
    }
    
    if (jqElem.data('dateBirthday')) {
      let date = new Date()
      date.setFullYear(date.getFullYear() - 18)
      jqElem.datepicker('endDate', date);
    }
  }
}
