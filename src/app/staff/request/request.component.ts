import { Component, OnInit } from '@angular/core';
import { StandardService } from '../../shared/standard.service';

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

  constructor(private standardService: StandardService) { }

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

  save() {
    console.log(this.cause);
    console.log(this.categoryId);
    console.log(this.remark);
  }

}
