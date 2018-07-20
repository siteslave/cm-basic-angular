import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private url: string
  ) { }

  getRequest(limit: number, offset: number) {
    return this.http.get(this.url + '/request?limit=' + limit + '&offset=' + offset)
      .toPromise();
  }

  saveRequest(cause: string, categoryId: any, remark: any) {
    let body = {
      cause: cause,
      categoryId: categoryId,
      remark: remark
    };
    return this.http.post(this.url + '/request', body).toPromise();
  }

  updateRequest(requestId: any, cause: string, categoryId: any, remark: any) {
    let body = {
      cause: cause,
      categoryId: categoryId,
      remark: remark
    };
    return this.http.put(this.url + '/request/' + requestId, body).toPromise();
  }

  getLogs(requestId: any) {
    return this.http.get(this.url + '/request/logs/' + requestId).toPromise();
  }

  removeRequest(requestId: any) {
    return this.http.delete(this.url + '/request/' + requestId).toPromise();
  }

  getRequestDetail(requestId: any) {
    return this.http.get(this.url + '/request/' + requestId).toPromise();
  }

}