import { Action } from '@ngrx/store';
import { PartyTrack } from '../models/party-track.model';

export enum PartyTrackActionTypes {
  ADD_TRACK = '[PARTY] Add Track',
  LIKE_TRACK = '[PARTY] Like Track',
  DISLIKE_TRACK = '[PARTY] Dis-like Track',
  STOP_TRACK = '[PARTY] Stop Track',
  START_TRACK = '[PARTY] Start Track',
  SKIP_TRACK = '[PARTY] Skip Track',
}

export class TrackAction implements Action {
  readonly type = PartyTrackActionTypes.ADD_TRACK

  constructor(public payload: PartyTrack) { }
}

export type PartyTrackAction = TrackAction
