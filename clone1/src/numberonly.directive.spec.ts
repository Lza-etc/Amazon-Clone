import { NumberonlyDirective } from './numberonly.directive';
import { NgControl } from '@angular/forms';

describe('NumberonlyDirective', () => {
  it('should create an instance', () => {
    const directive = new NumberonlyDirective(null as any); // Provide null as NgControl
    expect(directive).toBeTruthy();
  });
});
