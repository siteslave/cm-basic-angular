import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StaffGuardService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router) { }

  canActivate() {

    let token = sessionStorage.getItem('token');

    if (token) {
      // decoded
      let decoded = this.jwtHelper.decodeToken(token);
      console.log(decoded);
      if (decoded.userType === 'staff') {
        return true;
      } else {
        console.log('Permission denied!')
        this.router.navigateByUrl('access-denied');
      }

    } else {
      // redirect to login
      this.router.navigateByUrl('login');
    }

  }

}
