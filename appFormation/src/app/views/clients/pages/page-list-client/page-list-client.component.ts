import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public welcome: string;
  public collectionClients: Client[];
  public headers: string[];

  constructor(
    private cs: ClientsService
  ) { }

  ngOnInit(): void {
    this.welcome = 'List of clients';
    this.headers = [ 'Id', 'Name', 'CA', 'Commentaire', 'TVA', 'Total', 'Etat']
    this.cs.collection.subscribe(datas => {
      this.collectionClients = datas;
      console.log(this.collectionClients)
    })
  }

}
