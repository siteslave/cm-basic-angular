import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getRequest(limit: number, offset: number) {
    return this.http.get('http://localhost:8080/request?limit=' + limit + '&offset=' + offset)
      .toPromise();
  }

  saveRequest(cause: string, categoryId: any, remark: any) {
    let body = {
      cause: cause,
      categoryId: categoryId,
      remark: remark
    };
    return this.http.post('http://localhost:8080/request', body).toPromise();
  }

  getLogs(requestId: any) {
    return this.http.get('http://localhost:8080/request/logs/' + requestId).toPromise();
  }

  removeRequest(requestId: any) {
    return this.http.delete('http://localhost:8080/request/' + requestId).toPromise();
  }

}