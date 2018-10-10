import { Injectable } from '@angular/core';

const TOKEN_KEY = 'TOKEN_KEY';

@Injectable({providedIn : 'root'})
export class TokenService {

  constructor() { }

  save(token: string) {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  get() {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  delete() {
    window.localStorage.setItem(TOKEN_KEY, '');
  }
}
