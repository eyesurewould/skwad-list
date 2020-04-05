import { Track } from './track.model';

/**
 * We kep a set of tracks across all hosts to make searching
 * for frequently played tracks a little faster (fewer calls
 * to the Spotify API)
 */
export interface AppState {
  readonly tracks: Array<Track>;
}
