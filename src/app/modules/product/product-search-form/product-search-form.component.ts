import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector : 'app-product-search-form',
  templateUrl : './product-search-form.component.html',
  styleUrls : ['./product-search-form.component.scss']
})

export class ProductSearchFormComponent implements OnInit {

  @Input()
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Generate Form
   */
  private buildForm() {
    this.form = this.fb.group({
      keyword : ['', [Validators.required, Validators.email]],
      start_date : ['', [Validators.required]],
      end_date : ['', [Validators.required]],
      page : 1,
      ppp : 20
    });
  }
}
