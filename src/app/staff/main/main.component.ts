import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  requests = [];

  perPage = 5;
  total = 0;

  loading: boolean = true;

  constructor(private requestServie: RequestService) { }

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

}
