import { Component, OnInit } from '@angular/core';
import { StandardService } from '../../shared/standard.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styles: []
})
export class RequestComponent implements OnInit {

  categories = [];
  remark: string;
  categoryId: any;
  cause: string;

  constructor(
    private standardService: StandardService,
    private requestService: RequestService
  ) { }

  ngOnInit() {

    this.getCategories();
  }

  async getCategories() {
    try {
      let rs: any = await this.standardService.getCategories();
      if (rs.ok) {
        this.categories = rs.rows;
      } else {
        console.log(rs.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async save() {
    try {
      let rs: any = await this.requestService.saveRequest(
        this.cause,
        this.categoryId,
        this.remark
      );

      if (rs.ok) {
        console.log('OK!!!!');
      } else {
        console.log(rs.error);
      }

    } catch (error) {
      console.error(error);
    }
  }

}
