import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ClrDatagridStateInterface } from '@clr/angular';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  requests = [];
  requestLogs = [];

  perPage = 5;
  total = 0;

  loading: boolean = true;
  isOpen: boolean = false;

  constructor(
    private requestServie: RequestService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // this.getRequest();
  }

  async getRequest(limit: number, offset: number) {
    this.loading = true;
    try {
      let rs: any = await this.requestServie.getRequest(limit, offset);
      console.log(rs);
      this.requests = rs.rows;
      this.total = rs.total;
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
  }

  refresh(state: ClrDatagridStateInterface) {
    console.log(state); // pages.from , pages.to, pages.size

    let offset = +state.page.from;
    let limit = +state.page.to + 1;

    this.getRequest(limit, offset);

  }

  async openModal(requestId: any) {

    try {
      let rs: any = await this.requestServie.getLogs(requestId);
      if (rs.rows.length) {
        this.requestLogs = rs.rows;
        this.isOpen = true;
      } else {
        this.alertService.error();
      }
    } catch (error) {
      this.alertService.error();
    }
  }

  async removeRequest(requestId: any) {
    this.alertService.confirm()
      .then(async () => {
        try {
          let rs: any = await this.requestServie.removeRequest(requestId);
          if (rs.ok) {
            this.alertService.success();
            this.getRequest(this.perPage, 0);
          } else {
            this.alertService.error();
          }
        } catch (error) {
          this.alertService.error();
        }
      })
      .catch(() => {
        console.log('CANCEL');
      });
  }

}
