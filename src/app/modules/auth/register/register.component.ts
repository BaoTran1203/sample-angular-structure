import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector : 'app-register',
  templateUrl : './register.component.html',
  styleUrls : ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      fullName : ['', [Validators.required]],
      phone : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirm_password : ['', [Validators.required]]
    }, {validator : this.validate});
  }

  private validate(control: FormGroup) {
    let password = control.get('password');
    let confirm_password = control.get('confirm_password');
    if (password.value !== confirm_password.value) {
      return {'mismatch' : true};
    }
    return null;
  }

  get data(): any {return this.form.value;}

  set data(data: any) { this.form.patchValue(data); }

  get email(): any { return this.form.get('email'); }

  get fullName(): any { return this.form.get('fullName'); }

  get phone(): any { return this.form.get('phone'); }

  get password(): any { return this.form.get('password'); }

  get confirm_password(): any { return this.form.get('confirm_password'); }

  /**
   *
   */
  public onSubmit() {
    console.log(this.data);
    alert('Register Success');
  }
}
