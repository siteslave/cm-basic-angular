import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  doLogin(username: string, password: string, typeId: any) {
    let url = 'http://localhost:8080/login';
    let body = {
      username: username,
      password: password,
      typeId: typeId
    };

    return this.http.post(url, body).toPromise();

  }

}
