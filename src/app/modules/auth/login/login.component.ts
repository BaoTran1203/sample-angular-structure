import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/http/auth.service';
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
              private token: TokenService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      is_remember : [false]
    });
  }

  get data(): any { return this.form.value; }

  // noinspection JSUnusedGlobalSymbols
  set data(data: any) { this.form.patchValue(data); }

  get email(): any { return this.form.get('email'); }

  get password(): any { return this.form.get('password'); }

  /**
   *
   */
  public onSubmit() {
    this.authService.login(this.data)
      .subscribe(
        (resp: any) => {
          if (resp.status) {
            this.token.save(resp.data.token);
            // TODO goto home
          }
        });
  }
}
