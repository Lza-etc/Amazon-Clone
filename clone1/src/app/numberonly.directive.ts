import { Directive, HostListener, Injector } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {

  constructor(private injector: Injector) { }

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    const ngControl = this.injector.get(NgControl);
    if (ngControl) {
      ngControl.control?.setValue(value.replace(/[^0-9]/g, ''));
    }
  }

}
