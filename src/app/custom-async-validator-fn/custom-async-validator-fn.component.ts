import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../model/Person';
import {personNameAsyncValidator} from '../helpers/personNameAsyncValidator';
@Component({
  selector: 'app-custom-async-validator-fn',
  templateUrl: './custom-async-validator-fn.component.html',
  styleUrls: ['./custom-async-validator-fn.component.css']
})
export class CustomAsyncValidatorFnComponent implements OnInit {

  editForm:FormGroup
  persons:Person[]=[]

  currentID:number = 0

  constructor(private fb:FormBuilder) { 
    this.editForm = this.fb.group({
        personName: ["",[Validators.required],[personNameAsyncValidator(()=>this.currentID)]]
      }
    )
  }
  ngOnInit(): void {
    this.persons = [ 
      {id:100,name:"John"},
      {id:101,name:"Tina"},
      {id:102,name:"Lily"},
      {id:103,name:"Lucy"}
    ]
  }

  edit($event:any,$p:Person){
    console.log($event)
    console.log($p)
    openModal()
    this.editForm.get("personName")?.setValue($p.name)
    this.currentID = $p.id
  }

  save(){

    for(let control in this.editForm.controls){
      if(this.editForm.controls.hasOwnProperty(control)){
        this.editForm.controls[control].markAsDirty()
        this.editForm.controls[control].updateValueAndValidity()
      }
    }

    if(this.editForm.valid){
      let p:Person = this.persons.filter(p=>p.id==this.currentID)[0]
      p.name = this.editForm.get("personName")?.value
      closeModal()
    }


  }

}


function openModal(){
  // @ts-ignore
  window.myModal = new bootstrap.Modal(document.getElementById('myModal'))
  // @ts-ignore
  window.myModal.toggle()
}
function closeModal(){
  // @ts-ignore
  //var myModal = new bootstrap.Modal(document.getElementById('myModal'))
  // @ts-ignore
  window.myModal.toggle()
}

