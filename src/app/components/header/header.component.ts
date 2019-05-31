import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  res = [];
  constructor(private accountComponent: AccountComponent) { }
  ngOnInit() {
    this.res = this.accountComponent.res;
    console.log(this.res);
  }
}
