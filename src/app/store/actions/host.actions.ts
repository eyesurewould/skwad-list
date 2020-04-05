import { Action } from '@ngrx/store';
import { Host } from '../models/host.model';

export enum HostActionTypes {
  ADD_HOST = '[HOST] Add Host'
}

export class AddHostAction implements Action {
  readonly type = HostActionTypes.ADD_HOST;
  payload;
  loading;

  constructor(public payloadInput: Host) {
    this.payload = payloadInput;
  }
}

export type HostAction = AddHostAction;
