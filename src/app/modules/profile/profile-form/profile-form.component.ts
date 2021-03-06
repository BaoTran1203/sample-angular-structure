import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../../../core/http/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector : 'app-profile-form',
  templateUrl : './profile-form.component.html',
  styleUrls : ['./profile-form.component.scss']
})

export class ProfileFormComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toast: ToastService,
              private router: Router,
              private loading: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.buildForm();
    this.getProfile();
  }

  /**
   * Generate Form
   */
  private buildForm() {
    this.form = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      fullName : ['', [Validators.required]],
      phone : ['', [Validators.required]]
    });
  }

  get data(): any { return this.form.value; }

  set data(data: any) { this.form.patchValue(data); }

  get email(): any { return this.form.get('email'); }

  get fullName(): any { return this.form.get('fullName'); }

  get phone(): any { return this.form.get('phone'); }

  /**
   * Get data form API
   */
  private getProfile() {
    this.authService.getProfile().subscribe(
      (resp: any) => {
        if (resp.status) {
          this.data = resp.data || {};
        }
      });
  }

  /**
   * Submit Form
   */
  public onSubmit() {
    this.loading.show();
    this.authService.profile(this.data).subscribe(
      (resp: any) => {
        if (!resp.status) {
          this.toast.warning(resp.msg, resp.name);
          return;
        }
        this.toast.success(resp.msg);
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
