import { Directive, Injectable } from '@angular/core'
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  ValidationErrors
} from '@angular/forms'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { PasswordService } from '../services/password.service'

@Directive({
  selector: '[appPasswordSame]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PasswordSameDirective, multi: true}]
})
@Injectable({
  providedIn:'root'
})
export class PasswordSameDirective implements AsyncValidator {
  constructor (private pwsService: PasswordService) {}

  validate ( control: AbstractControl ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.pwsService.isSame(control.value).pipe(
      map(ret => {
        if (ret)
          return { samePwd: true, errorMsg: 'same password ' + control.value }
        return null
      })
    )
  }
}
