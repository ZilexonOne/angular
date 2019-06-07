import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() res = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    console.log(this.res);
  }
}
