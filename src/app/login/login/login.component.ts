import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../login.service';

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


  constructor(private router: Router, private loginService: LoginService) { }

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

  async doLogin() {

    try {
      let rs: any = await this.loginService.doLogin(
        this.username,
        this.password,
        this.typeId
      );

      if (rs.ok) {
        this.isError = false;
        let token = rs.token;

        sessionStorage.setItem('token', token);

        let decoded = this.jwtHelper.decodeToken(token);
        console.log(decoded);

        sessionStorage.setItem('fullname', decoded.fullname);

        if (this.typeId === '1') {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/staff');
        }
      } else {
        this.isError = true;
      }

    } catch (error) {

    }

  }

}
