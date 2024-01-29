import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {

  constructor(private ele: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    const input = this.ele.nativeElement as HTMLInputElement;
    if (input) {
      input.value = value.replace(/[^\d.-]/g, '');
    }
  }

}
