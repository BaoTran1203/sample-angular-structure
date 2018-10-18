import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../../../core/http/auth.service';
import { ProfileService } from '../../../core/services/profile.service';
import { SecretCodeService } from '../../../core/services/secret-code.service';
import { ToastService } from '../../../core/services/toast.service';
import { TokenService } from '../../../core/services/token.service';

@Component({
  selector : 'app-login',
  templateUrl : './login.component.html',
  styleUrls : ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private token: TokenService,
              private secretCode: SecretCodeService,
              private profile: ProfileService,
              private toast: ToastService,
              private router: Router,
              private spinnerService: Ng4LoadingSpinnerService,
              private title: Title) {
    this.title.setTitle('Đăng nhập');
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
      password : ['', [Validators.required, Validators.minLength(6)]],
      is_remember : [false]
    });
  }

  get data(): any { return this.form.value; }

  set data(data: any) { this.form.patchValue(data); }

  get email(): any { return this.form.get('email'); }

  get password(): any { return this.form.get('password'); }

  /**
   * Submit Form
   */
  public onSubmit() {
    this.spinnerService.show();
    this.authService.login(this.data).subscribe(
      (resp: any) => {
        if (!resp.status) {
          this.toast.warning(resp.msg, resp.name);
          return;
        }

        this.toast.success(resp.msg);

        this.token.save = resp.token;
        this.secretCode.save = resp.secretCode;
        this.profile.save = resp.data;

        setTimeout(() => {
          this.router.navigate(['/product/list']).then().catch();
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
      this.spinnerService.hide();
    }, 1200);
  }
}
