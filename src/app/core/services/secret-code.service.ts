import { Injectable } from '@angular/core';

const KEY = 'SECRET_CODE';

@Injectable({providedIn : 'root'})
export class SecretCodeService {

  constructor() { }

  set save(value: string) {
    let code = value.split('').reverse().join('');
    window.localStorage.setItem(KEY, code);
  }

  get get(): string {
    let code = window.localStorage.getItem(KEY);
    return code.split('').reverse().join('');
  }

  get delete() {
    window.localStorage.setItem(KEY, '');
    return;
  }

  get has(): boolean {
    return !!this.get;
  }
}
