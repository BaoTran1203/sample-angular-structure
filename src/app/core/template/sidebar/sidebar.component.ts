import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CategoryService } from '../../http/category.service';

@Component({
  selector : 'app-sidebar',
  templateUrl : './sidebar.component.html',
  styleUrls : ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  public items: any[] = [];

  constructor(private loading: Ng4LoadingSpinnerService,
              private toast: ToasterService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.loading.show();
    let query: any = {
      status : 'activated',
      page : 1,
      ppp : 999
    };
    this.categoryService.list(query).subscribe(
      (resp: any) => {
        if (!resp.status) {
          this.toast.pop('warning', resp.name, resp.msg);
          return;
        }
        this.items = resp.data;
      },

      (err: any) => this.toast.pop('error', 'Error', err.message),
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
