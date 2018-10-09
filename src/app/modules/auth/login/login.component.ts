import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector : 'app-login',
  templateUrl : './login.component.html',
  styleUrls : ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      is_remember : [false]
    });
  }

  get data(): any { return this.form.value; }

  set data(data: any) { this.form.patchValue(data); }

  get email(): any { return this.form.get('email'); }

  get password(): any { return this.form.get('password'); }

  /**
   *
   */
  public onSubmit() {
    console.log(this.data);
    alert('Login Success');
    this.data = {
      email : '',
      password : ''
    };
  }
}
