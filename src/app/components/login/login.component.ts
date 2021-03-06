import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})

export class LoginComponent implements OnInit {
  asdfg: string;
  opened = false;
  constructor(private loginService: LoginService ) { }
  ngOnInit() {}
  goToInst() {
    this.loginService.click();
  }
  view() {
    this.opened = !this.opened;
    console.log(this.opened);
  }
}
