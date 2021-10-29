import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import {from,timer, Observable, of} from 'rxjs'
import {delay, map, mergeAll, switchMap, debounce} from 'rxjs/operators';

var emailExistsFn1 : AsyncValidatorFn = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

    var ret = of(control.value).pipe(
        delay(3000),
        map((response:string)=>{
            console.log(response)
            if(response?.indexOf('a')!=-1){
                return {emailExists:true,errorMsg:"email has black char 'a'"}
            }
            return null
        })
    )
    return ret;
}

export const emailExistsFn = emailExistsFn1;

