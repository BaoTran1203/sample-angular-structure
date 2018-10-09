import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector : 'app-forgot',
  templateUrl : './forgot.component.html',
  styleUrls : ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email : ['', [Validators.required, Validators.email]]
    });
  }

  get data(): any { return this.form.value; }

  set data(data: any) { this.form.patchValue(data); }

  get email(): any { return this.form.get('email'); }

  /**
   *
   */
  public onSubmit() {
    alert('Mã xác nhận đã được gửi về email của bạn.');
  }

}
