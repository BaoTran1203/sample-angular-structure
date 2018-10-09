import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector : 'app-reset',
  templateUrl : './reset.component.html',
  styleUrls : ['./reset.component.scss']
})

export class ResetComponent implements OnInit {

  public form: FormGroup;
  public key: string = '';

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        if (params['key']) {
          this.key = params['key'];
        }
      }
    );

    this.form = this.fb.group({
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirm_password : ['', [Validators.required]]
    });
  }

  get data(): any { return this.form.value; }

  set data(data: any) { this.form.patchValue(data); }

  get password(): any { return this.form.get('password'); }

  get confirm_password(): any { return this.form.get('confirm_password'); }

  /**
   *
   */
  public onSubmit() {
    alert('Khôi phục mật khẩu thành công. Vui lòng đăng nhập lại.');
    setTimeout(() => {
      this.router.navigate(['/auth/login']).then().catch();
    }, 400);
  }

}
