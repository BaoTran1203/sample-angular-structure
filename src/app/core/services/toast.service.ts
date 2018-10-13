import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Injectable({providedIn : 'root'})
export class ToastService {

  constructor(private toast: ToasterService) {}

  success(msg: string, title: string = 'Success') {
    this.toast.pop('success', title, msg);
  }

  warning(msg: string, title: string = 'Warning') {
    this.toast.pop('warning', title, msg);
  }

  error(msg: string, title: string = 'Error') {
    this.toast.pop('error', title, msg);
  }
}
