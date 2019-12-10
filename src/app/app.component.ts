import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';


export const passwordMatcher = (c: AbstractControl) => {
  return c.get('password').value === c.get('confirm').value
    ? null : { notmatch: true };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular8 Advance Forms';
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      account: this.fb.group({
        username: [],
        password: ['', Validators.required],
        confirm: ['', Validators.required]
      }, { validator: passwordMatcher }),
      newsletter: [''],
      note: ['', [Validators.required]]

    });

    // patchValue
    this.myForm.patchValue({
      firstname: 'sutin',
      lastname: 'injitt',
      account: {
        username: 'sutin1234'
      },
      note: 'other'
    });
  }

  onSubmit() {
    console.log(this.myForm);
    if (this.myForm.invalid) {
      return this.myForm.validator;
    }

  }

}
