import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector : 'app-product-list',
  templateUrl : './product-list.component.html',
  styleUrls : ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder,
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
    this.searchForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      fullName : ['', [Validators.required]],
      phone : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirm_password : ['', [Validators.required]]
    });
  }
}
