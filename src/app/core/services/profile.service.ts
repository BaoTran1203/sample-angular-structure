import { Injectable } from '@angular/core';

const KEY = 'PROFILE';

@Injectable({providedIn : 'root'})
export class ProfileService {

  constructor() { }

  set save(value: any) {
    window.localStorage.setItem(KEY, JSON.stringify(value));
  }

  get get(): any {
    let value = window.localStorage.getItem(KEY);
    return JSON.parse(value);
  }

  get delete() {
    window.localStorage.setItem(KEY, '{}');
    return;
  }

  get has(): boolean {
    return !!this.get;
  }

  get fullName(): string {
    return this.get.fullName || '';
  }

  get _id(): string {
    return this.get._id || '';
  }
}
