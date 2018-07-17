import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  email: string;
  fullname: string;

  constructor() { }

  ngOnInit() {
    this.email = sessionStorage.getItem('email');
    this.fullname = sessionStorage.getItem('fullname');
  }

}
