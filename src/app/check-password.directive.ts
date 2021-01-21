import { Directive,Input } from '@angular/core';
import {Validator,AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors,  ValidatorFn} from "@angular/forms"

@Directive({
  selector: '[appCheckPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CheckPasswordDirective, multi: true }]
})
export class CheckPasswordDirective implements Validator {

  constructor() { }

@Input () appCheckPassword:string;

  validate(control:AbstractControl):{[key:string]:any} | null{ 


const controlToCoampare=control.parent.get(this.appCheckPassword)


if(controlToCoampare && controlToCoampare.value !== control.value){

  return {'notEqual':true}


}

return null;


  }

}
