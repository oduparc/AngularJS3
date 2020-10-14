import { Component, EventEmitter, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collectionOrder: Order[];
  public collectionHeaders: string[];
  public states = Object.values(StateOrder);

  constructor(
    private os: OrdersService
  ) { }

  ngOnInit(): void {
    this.collectionHeaders = ['Type', 'Client', 'Nb jours', 'TJM HT', 'Total HT', 'Total TTC', 'Date', 'Etat'];
    this.os.collection.subscribe(orders => {
      this.collectionOrder = orders;
      console.log(this.collectionOrder)
    })
    // this.os.getFilterByState(StateOrder.OPTION).subscribe(orders => this.collectionOrder = orders)
  }

  public changeState(order: Order, event) {
    this.os.updateState(order, event.target.value).subscribe(data => {
      console.log("Before", order.state);
      order.state = data.state;
      console.log("After", order.state);
    })
  }

}
