import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public welcome: string;

  constructor() { }

  ngOnInit(): void {
    this.welcome = 'List of clients';
  }

}
