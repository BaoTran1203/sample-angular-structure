import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector : 'app-forgot',
  templateUrl : './forgot.component.html',
  styleUrls : ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private spinnerService: Ng4LoadingSpinnerService) { }

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
    this.spinnerService.show();
    alert('Mã xác nhận đã được gửi về email của bạn.');
    this.hideSpinner();
  }

  /**
   * Hide loading spinner with a timeout
   */
  private hideSpinner() {
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1200);
  }
}
