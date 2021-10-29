import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  isSame(value:string) : Observable<boolean> {
    return of(value=="123456").pipe(delay(1000))
  }

}
