import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router) { }

  canActivate() {

    let token = sessionStorage.getItem('token');

    if (token) {
      // decoded
      let decoded = this.jwtHelper.decodeToken(token);
      if (decoded.userType === 'admin') {
        return true;
      } else {
        this.router.navigateByUrl('access-denied');
      }

    } else {
      // redirect to login
      this.router.navigateByUrl('login');
    }

  }

}
