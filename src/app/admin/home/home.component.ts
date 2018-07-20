import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  users = [{
    id: '1',
    name: 'Satit Rianpit',
    creation: '11/12/2018',
    color: 'red'
  }];

  requests = [];

  constructor() { }

  ngOnInit() {
  }

  refresh($event) {

  }
}
