import { Injectable } from '@angular/core';

const KEY = 'TOKEN_KEY';

@Injectable({providedIn : 'root'})
export class TokenService {

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
