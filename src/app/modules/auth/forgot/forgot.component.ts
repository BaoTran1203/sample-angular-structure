import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../../../core/http/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector : 'app-forgot',
  templateUrl : './forgot.component.html',
  styleUrls : ['./forgot.component.scss']
})

export class ForgotComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private spinnerService: Ng4LoadingSpinnerService,
              private authService: AuthService,
              private toast: ToastService) { }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Generate Form
   */
  private buildForm() {
    this.form = this.fb.group({
      email : ['', [Validators.required, Validators.email]]
    });
  }

  get data(): any { return this.form.value; }

  set data(data: any) { this.form.patchValue(data); }

  get email(): any { return this.form.get('email'); }

  /**
   * Submit Form
   */
  public onSubmit() {
    this.spinnerService.show();
    this.authService.forgot(this.data).subscribe(
      (resp: any) => {
        if (!resp.status) {
          this.toast.warning(resp.msg, resp.name);
          return;
        }

        this.toast.success(resp.msg);
        console.log('URL', resp.url);
      },

      (err: any) => this.toast.error(err.message),
      () => this.hideSpinner()
    );
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
