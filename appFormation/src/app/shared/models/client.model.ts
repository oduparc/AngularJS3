import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: number;
  tva = 20;
  state = StateClient.ACTIVE;
  name: string;
  ca: number;
  comment: string;

  total(): number {
    return this.ca * (1 + this.tva / 100);
  }

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj)
    }
  }
}
