import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastService } from '../../services/toast.service';

@Component({
  selector : 'app-sidebar',
  templateUrl : './sidebar.component.html',
  styleUrls : ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor(private loading: Ng4LoadingSpinnerService,
              private toast: ToastService) {
  }

  ngOnInit() {
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
