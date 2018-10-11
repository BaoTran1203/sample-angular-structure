import { Injectable } from '@angular/core';

const KEY = 'SECRET_CODE';

@Injectable({providedIn : 'root'})
export class SecretCodeService {

  constructor() { }

  set save(value: string) {
    window.localStorage.setItem(KEY, value);
  }

  get get(): string {
    return window.localStorage.getItem(KEY);
  }

  get delete() {
    window.localStorage.setItem(KEY, '');
    return;
  }

  get has(): boolean {
    return !!this.get;
  }
}
