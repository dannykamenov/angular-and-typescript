import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appAppEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppEmailDirective,
      multi: true
    }
  ]
})
export class AppEmailDirective implements Validator, OnChanges{

  @Input() appAppEmail: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    const appEmailChange = changes['appAppEmail'];
    if(appEmailChange){
      this.validate = appEmailValidator(appEmailChange.currentValue);
    }
    
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }
}
