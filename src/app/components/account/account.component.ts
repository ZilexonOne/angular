import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [ AccountService ]
})

export class AccountComponent implements OnInit {
  token: any;
  res = [];
  constructor(private accountService: AccountService) {
  }
  ngOnInit() {
    this.token = this.accountService.token;
    this.res = this.accountService.getData();
  }
}

