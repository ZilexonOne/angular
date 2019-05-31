import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountService {
  token: any;
  res = [];
  constructor(private http: HttpClient) {
    this.token = location.href.split('#access_token=')[1];
  }
  getData() {
    this.http.get('https://api.instagram.com/v1/users/self/?access_token=' + this.token)
      .pipe(map(response => {
        return response;
      })).subscribe((response) => {
      this.res.push(response);
    });
    return this.res;
  }
}
