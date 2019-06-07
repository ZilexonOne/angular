import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {
  token: string;
  res = [];
  constructor(private http: HttpClient) {
    this.token = location.href.split('#access_token=')[1];
  }
  getPhotos() {
    this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token='
      + this.token)
      .pipe(map(response => {
        return response;
      })).subscribe((response) => {
        this.res.push(response);
      });
    return this.res;
  }
}
