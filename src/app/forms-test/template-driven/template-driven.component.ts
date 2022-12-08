import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  //usertaskForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  // testForms = new FormGroup({
  //   firname: new FormControl('Name one'),
  //   laName: new FormControl('Name two')
  // })

  // testForms = this.fb.group({
  //   firname: ['Nm', [Validators.required, Validators.minLength(3)]],
  //   laName: ['hmm']
  // })
  ngOnInit(): void {
  }
  // createTaskForm() {
  //   this.usertaskForm = this.fb.group({
  //     newtaskRows: this.fb.array([])
  //   })
  //   this.initiateForm();
  // }
  // get getNewFormControls() {
  //   return this.usertaskForm.get('newtaskRows') as FormArray;
  // }
  // sbtClick(form: NgForm) {
  //   console.log('the form is', form.value)
  // }
  // sbtClickReactive() {

  // }

}
