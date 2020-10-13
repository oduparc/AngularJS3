import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  id: number;
  tva: number;
  state: StateClient;
  name: string;
  ca: number;
  comment: string;

  total(): number;
}
