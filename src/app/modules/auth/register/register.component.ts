import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../../../core/http/auth.service';

@Component({
  selector : 'app-register',
  templateUrl : './register.component.html',
  styleUrls : ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toast: ToasterService,
              private router: Router,
              private spinnerService: Ng4LoadingSpinnerService) {
  }

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
    this.spinnerService.show();
    this.authService.register(this.data)
      .subscribe(
        (resp: any) => {
          this.hideSpinner();
          if (!resp.status) {
            this.toast.pop('warning', resp.name, resp.msg);
            return;
          }

          this.toast.pop('success', 'Success', resp.msg);
          setTimeout(() => {
            this.router.navigate(['/auth/login']).then().catch();
          }, 400);
        },

        (err: any) => {
          this.hideSpinner();
          console.log('err', err);
          this.toast.pop('error', 'Error', err.message);
        });
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
