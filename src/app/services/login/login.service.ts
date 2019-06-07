import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  click() {
    window.location.href = 'https://api.instagram.com/oauth/authorize/' +
      '?client_id=56bcc722521f48bfbdb438558a0afe01&redirect_uri=http://localhost:4200/account&response_type=token';
  }
}
