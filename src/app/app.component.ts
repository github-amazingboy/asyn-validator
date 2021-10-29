import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'asynValidator';
  confirmPWD:string=""

  save(ngForm:NgForm){
    for(var control in ngForm.controls){
      if(ngForm.controls.hasOwnProperty(control)){
        ngForm.controls[control].markAsDirty();
        ngForm.controls[control].updateValueAndValidity();
      }
    }
    console.log(ngForm.form)
  }

}
