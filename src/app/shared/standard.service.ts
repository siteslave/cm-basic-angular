import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('http://localhost:8080/categories').toPromise();
  }
}
