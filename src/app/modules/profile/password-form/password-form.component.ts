import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../../../core/http/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector : 'app-password-form',
  templateUrl : './password-form.component.html',
  styleUrls : ['./password-form.component.scss']
})

export class PasswordFormComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toast: ToastService,
              private router: Router,
              private loading: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Generate Form
   */
  private buildForm() {
    this.form = this.fb.group({
      old_password : ['', [Validators.required]],
      new_password : ['', [Validators.required]],
      confirm_password : ['', [Validators.required]]
    }, {validator : this.validate});
  }

  /**
   * Custom validator form
   * @param control
   */
  private validate(control: FormGroup) {
    let password = control.get('new_password');
    let confirm_password = control.get('confirm_password');
    if (password.value !== confirm_password.value) {
      return {'mismatch' : true};
    }
    return null;
  }

  get data(): any { return this.form.value; }

  set data(data: any) { this.form.patchValue(data); }

  get old_password(): any { return this.form.get('old_password'); }

  get new_password(): any { return this.form.get('new_password'); }

  get confirm_password(): any { return this.form.get('confirm_password'); }

  /**
   * Submit Form
   */
  public onSubmit() {
    this.loading.show();
    this.authService.password(this.data).subscribe(
      (resp: any) => {
        if (!resp.status) {
          this.toast.warning(resp.msg, resp.name);
          return;
        }

        this.toast.success(resp.msg);
        setTimeout(() => {
          this.router.navigateByUrl('/profile', {skipLocationChange : true})
            .then(() => this.router.navigate(['profile/password']));
        }, 400);
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
      this.loading.hide();
    }, 1200);
  }
}
