import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ProductService } from '../../../core/http/product.service';
import { ProfileService } from '../../../core/services/profile.service';
import { ToastService } from '../../../core/services/toast.service';
import * as _ from 'lodash';

@Component({
  selector : 'app-product-list',
  templateUrl : './product-list.component.html',
  styleUrls : ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  public items: any = [];
  public totalItems = 0;

  public params: any = {
    keyword : '',
    page : 1,
    ppp : 50
  };

  constructor(private toast: ToastService,
              private router: Router,
              private loading: Ng4LoadingSpinnerService,
              private productService: ProductService,
              private profile: ProfileService) { }

  ngOnInit() {
    let DATE_NOW = new Date();

    // Set default Datetime in SearchBox
    this.params.startDate = {
      year : DATE_NOW.getFullYear(),
      month : DATE_NOW.getMonth() + 1,
      day : DATE_NOW.getDate()
    };

    this.params.endDate = {
      year : DATE_NOW.getFullYear(),
      month : DATE_NOW.getMonth() + 1,
      day : DATE_NOW.getDate()
    };

    this.getItems();
  }

  /**
   * Call API to get list product
   */
  public getItems() {
    this.loading.show();
    this.productService.list(this.params).subscribe(
      (resp: any) => {
        if (!resp.status) {
          this.toast.warning(resp.msg, resp.name);
          return;
        }

        this.toast.success(resp.msg);
        this.items = resp.data;
        this.totalItems = resp.total;
      },

      (err: any) => this.toast.error(err.message),
      () => this.hideSpinner()
    );
  }

  /**
   * Reset page to 1 and search with new filter
   */
  public search() {
    this.params.page = 1;
    this.getItems();
  }

  /**
   * Check product is liked by me
   * @param item
   */
  public isLiked(item: any): boolean {
    return !!_.find(item.likedBy, (o: string) => {
      return o === this.profile._id;
    });
  }

  /**
   * Like or unlike product
   * @param item
   */
  public like(item: any) {
    this.loading.show();
    let status: number = this.isLiked(item) ? 0 : 1;
    this.productService.wishlist(item._id, status).subscribe(
      (resp: any) => {
        if (!resp.status) {
          this.toast.warning(resp.msg, resp.name);
          return;
        }

        this.toast.success(resp.msg);

        // Change UI
        if (status === 1) {
          item.likedBy.push(this.profile._id);
          return;
        }

        _.remove(item.likedBy, (o: string) => {
          return o === this.profile._id;
        });
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
