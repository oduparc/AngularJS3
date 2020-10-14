import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public collectionClients: Client[];
  public headers: string[];
  public statesClient = Object.values(StateClient);
  public btn: BtnI;

  constructor(
    private cs: ClientsService
  ) { }

  ngOnInit(): void {
    this.btn = { label: 'Add Client', route: 'add' }
    this.headers = [ 'Id', 'Name', 'CA', 'Commentaire', 'TVA', 'Total', 'Etat']
    this.cs.collection.subscribe(datas => {
      this.collectionClients = datas;
      console.log(this.collectionClients)
    })
  }

  public changeState(client: Client, event): void {
    this.cs.updateState(client, event.target.value).subscribe(data => client.state = data.state)
  }

}
