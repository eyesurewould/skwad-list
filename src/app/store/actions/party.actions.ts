import { Action } from '@ngrx/store';
import { Party } from '../models/party.model';

export enum PartyActionTypes {
  ADD_PARTY = '[PARTY] Add Party',
  STOP_PARTY = '[PARTY] Stop Party',
  START_PARTY = '[PARTY] Start Party'
}

export class AddPartyAction implements Action {
  readonly type = PartyActionTypes.ADD_PARTY;

  constructor(public payload: Party) { }
}

export class StartPartyAction implements Action {
  readonly type = PartyActionTypes.START_PARTY;

  constructor(public payload: Party) { }
}

export class StopPartyAction implements Action {
  readonly type = PartyActionTypes.STOP_PARTY;

  constructor(public payload: Party) { }
}

export type PartyAction = AddPartyAction | StartPartyAction | StopPartyAction;
