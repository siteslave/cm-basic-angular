import { Component, OnInit } from '@angular/core';
import { StandardService } from '../../shared/standard.service';
import { RequestService } from '../request.service';
import { Router } from '../../../../node_modules/@angular/router';
import { AlertService } from '../../shared/alert.service';

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
    private requestService: RequestService,
    private router: Router,
    private alertService: AlertService
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
        this.alertService.success();
        this.router.navigateByUrl('/staff/main');
      } else {
        this.alertService.error();
        console.log(rs.error);
      }

    } catch (error) {
      this.alertService.error();
      console.error(error);
    }
  }

}
