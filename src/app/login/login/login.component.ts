import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jwtHelper: JwtHelperService = new JwtHelperService();

  username: string;
  password: string;
  typeId: any;

  isError = false;

  userTypes = [
    { id: 1, name: 'ผู้ดูแลระบบ' },
    { id: 2, name: 'เจ้าหน้าที่ทั่วไป' },
  ];


  constructor(private router: Router) { }

  ngOnInit() {
    this.checkToken();
  }

  checkToken() {
    let token = sessionStorage.getItem('token');
    if (token) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        let decoded = this.jwtHelper.decodeToken(token);
        console.log(decoded);

        sessionStorage.setItem('fullname', decoded.fullname);
        sessionStorage.setItem('email', decoded.email);

        if (decoded.userType === 'staff') {
          this.router.navigateByUrl('/staff');
        } else if (decoded.userType === 'admin') {
          this.router.navigateByUrl('/admin');
        } else {
          this.isError = true;
        }
      }
    }
  }

  doLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      // go main page
      this.isError = false;
      let token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzE4MDE0MzcsImV4cCI6MTU2MzMzNzQzNywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImZ1bGxuYW1lIjoiU2F0aXQgUmlhbnBpdCIsImVtYWlsIjoicmlhbnBpdEBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6ImFkbWluIn0.94ykjL9V5V94DxkKJabObKO2NilbJF3gdfsq19r81Oc`;

      sessionStorage.setItem('token', token);

      let decoded = this.jwtHelper.decodeToken(token);
      console.log(decoded);

      sessionStorage.setItem('fullname', decoded.fullname);
      sessionStorage.setItem('email', decoded.email);

      if (this.typeId === '1') {
        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/staff');
      }

    } else {
      this.isError = true;
    }
  }

}
