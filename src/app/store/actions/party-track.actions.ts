import { Action } from '@ngrx/store';
import { Track } from '../models/track.model';

export enum TrackActionTypes {
  ADD_TRACK = '[PARTY] Add Track',
  LIKE_TRACK = '[PARTY] Like Track',
  DISLIKE_TRACK = '[PARTY] Dis-like Track',
  STOP_TRACK = '[PARTY] Stop Track',
  START_TRACK = '[PARTY] Start Track',
  SKIP_TRACK = '[PARTY] Skip Track',
}

export class AddTrackAction implements Action {
  readonly type = TrackActionTypes.ADD_TRACK;

  constructor(public payload: Track) { }
}

export class LikeTrackAction implements Action {
  readonly type = TrackActionTypes.LIKE_TRACK;

  constructor(public payload: Track) { }
}

export type TrackAction = AddTrackAction | LikeTrackAction;
