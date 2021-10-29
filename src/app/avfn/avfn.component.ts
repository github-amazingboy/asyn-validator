import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailExistsFn }from '../helpers/asynfn'
import {passwordSameValidator} from '../helpers/passwordSameValidator'

@Component({
  selector: 'app-avfn',
  templateUrl: './avfn.component.html',
  styleUrls: ['./avfn.component.css']
})
export class AvfnComponent implements OnInit {

  validateForm:FormGroup

  constructor(private fb: FormBuilder,private psv:passwordSameValidator) { 
    this.validateForm = this.fb.group({
      email:["",[Validators.required,Validators.email],[emailExistsFn]],
      password:["",[Validators.required],[psv]]
    },{updateOn: 'blur'})
  }

  get email() : AbstractControl{
    return this.validateForm.get('email') as AbstractControl;
  }

  ngOnInit(): void {
  }

  Submit(){
    for(var control in this.validateForm.controls){
      if(this.validateForm.controls.hasOwnProperty(control)){
        this.validateForm.controls[control].markAsDirty();
        this.validateForm.controls[control].updateValueAndValidity();
      }
    }
  }
}
