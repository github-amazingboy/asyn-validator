import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import { Person } from "../model/Person";

export function personNameAsyncValidator(getIDFunction:Function):AsyncValidatorFn{
    return (control:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>=>{
      var id = getIDFunction();
      return  of(id).pipe(
            delay(3000),
            switchMap((id:number)=>{
                return of(Person.MockServerLimit({id,name:control.value})?null:{ serverLimit:true });
            })
        )
    };
}