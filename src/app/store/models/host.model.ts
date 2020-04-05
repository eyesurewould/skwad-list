import { Party } from './party.model';
import { Guest } from './guest.model';

export interface Host {
  hostId: string;
  name?: string;
  parties?: Party[];
  pastParties?: Party[];
  allGuests?: Guest[];
}
