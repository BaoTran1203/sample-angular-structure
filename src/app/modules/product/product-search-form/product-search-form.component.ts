import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector : 'app-product-search-form',
  templateUrl : './product-search-form.component.html',
  styleUrls : ['./product-search-form.component.scss']
})

export class ProductSearchFormComponent implements OnInit {

  @Output() queryData: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();

    let DATE_NOW = new Date();
    this.data = {
      startDate : {
        year : DATE_NOW.getFullYear(),
        month : DATE_NOW.getMonth() + 1,
        day : DATE_NOW.getDate()
      },
      endDate : {
        year : DATE_NOW.getFullYear(),
        month : DATE_NOW.getMonth() + 1,
        day : DATE_NOW.getDate()
      }
    };
  }

  /**
   * Generate Form
   */
  private buildForm() {
    this.form = this.fb.group({
      keyword : '',
      startDate : '',
      endDate : ''
    });
  }

  get data(): any {return this.form.value;}

  set data(data: any) { this.form.patchValue(data); }

  get keyword(): any { return this.form.get('keyword'); }

  get startDate(): any { return this.form.get('startDate'); }

  get endDate(): any { return this.form.get('endDate'); }

  public onSubmit() {
    let data: any = this.data;
    console.log('this.startDate', this.startDate);
    data.start_date = this.startDate.value.year + '-' + this.startDate.value.month + '-' + this.startDate.value.day;
    data.end_date = this.endDate.value.year + '-' + this.endDate.value.month + '-' + this.endDate.value.day;
    delete data.startDate;
    delete data.endDate;
    this.queryData.emit(data);
  }
}
