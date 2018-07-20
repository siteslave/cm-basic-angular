import { Component, OnInit } from '@angular/core';
import { StandardService } from '../../shared/standard.service';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
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

  requestId: any;

  constructor(
    private standardService: StandardService,
    private requestService: RequestService,
    private router: Router,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.requestId = params.requestId;
    });
  }

  async ngOnInit() {
    await this.getCategories();
    if (this.requestId) {
      await this.getDetail(this.requestId);
    }
  }

  async getDetail(requestId: any) {
    try {
      let rs: any = await this.requestService.getRequestDetail(requestId);
      if (rs.ok) {
        if (rs.info) {
          this.cause = rs.info.request_cause;
          this.categoryId = rs.info.request_category_id;
          this.remark = rs.info.remark;
        }
      }
    } catch (error) {
      console.error(error);
      this.alertService.error();
    }
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

      let rs: any;

      if (this.requestId) {
        rs = await this.requestService.updateRequest(
          this.requestId,
          this.cause,
          this.categoryId,
          this.remark
        );
      } else {
        rs = await this.requestService.saveRequest(
          this.cause,
          this.categoryId,
          this.remark
        );
      }

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
