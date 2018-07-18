import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  constructor(private requestServie: RequestService) { }

  ngOnInit() {
    this.getRequest();
  }

  async getRequest() {
    try {
      let rs: any = await this.requestServie.getRequest();
      console.log(rs);
    } catch (error) {

    }
  }

}
