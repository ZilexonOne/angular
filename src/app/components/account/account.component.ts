import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [ AccountService ]
})

export class AccountComponent implements OnInit {
  token: any;
  res = [];
  flag = false;
  constructor(private scroll: ViewportScroller, private accountService: AccountService) {
  }
  ngOnInit() {
    this.token = this.accountService.token;
    this.res = this.accountService.getData();
  }
  scroll_to_top() {
    this.scroll.scrollToPosition([0, 0]);
    this.flag = !this.flag;
  }
  scroll_to_bottom() {
    this.scroll.scrollToPosition([0, outerHeight]);
    this.flag = !this.flag;
  }
}

