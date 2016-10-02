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
    this.transformOptions(jq)
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
  }

  detached() {
    $(this.element).datepicker('destroy').off('changeDate');
  }
  
  transformOptions(jqElem) {
    if (jqElem.is('[data-date-min-today]')) {
      jqElem.data('dateStartDate', new Date())
    }
    
    if (jqElem.is('[data-date-max-today]')) {
      jqElem.data('dateEndDate', new Date())
    }
    
    if (jqElem.is('[data-date-birthday]')) {
      let date = new Date()
      date.setFullYear(date.getFullYear() - 18)
      jqElem.data('dateEndDate', date);
    }
  }
}
