import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../../../core/http/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector : 'app-register',
  templateUrl : './register.component.html',
  styleUrls : ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toast: ToastService,
              private router: Router,
              private loading: Ng4LoadingSpinnerService,
              private title: Title) {
    this.title.setTitle('Đăng ký');
  }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Generate Form
   */
  private buildForm() {
    this.form = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      fullName : ['', [Validators.required]],
      phone : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirm_password : ['', [Validators.required]]
    }, {validator : this.validate});
  }

  /**
   * Custom validator form
   * @param control
   */
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
   * Submit Form
   */
  public onSubmit() {
    this.loading.show();
    this.authService.register(this.data).subscribe(
      (resp: any) => {
        if (!resp.status) {
          this.toast.warning(resp.msg, resp.name);
          return;
        }

        this.toast.success(resp.msg);
        setTimeout(() => {
          this.router.navigate(['/auth/login']).then().catch();
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
