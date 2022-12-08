import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  // testGrp = new FormGroup({
  //   fname: new FormControl(),
  //   lname: new FormControl()
  // })
  testGrp = this.fb.group({
    fname: ['Reshma', Validators.required],
    lname: ['test'],
    myadd: this.fb.group({
      mycity: []
    })
  })

  ngOnInit(): void {
  }
  submit(form: NgForm) {
    console.log('the fom is', form)
  }
  submitForm() {
    console.log('the form is', this.testGrp)
  }

}
