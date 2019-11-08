import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// TODO: Move to AddTrack page
import { v4 as uuid } from 'uuid';

import { Track } from '../store/models/track.model';
import { AppState } from '../store/models/app-state.model';
// TODO: Move to AddTrack page
import { AddTrackAction, LikeTrackAction } from '../store/actions/track.actions';
import { inherits } from 'util';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  // TODO this needs to be moved to a new store for the current track
  currentTrack: Track =
    {
      id: '0',
      title: 'Dolla billz Y\'all',
      artist: 'YungStoopid',
      album: 'Fake bitches',
      length: 121,
      remaining: 10,
      likes: 0,
      dislikes: 1,
      image: {
        url: 'https://miro.medium.com/max/500/1*-330NOoU1m-7lhYrseKU0Q.jpeg',
        isDark: true
      }
    };

  tracks: Observable<Array<Track>>;
  // TODO: Move to AddTrack page
  newTrack: Track = { id: '', title: '', artist: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.tracks = this.store.select(store => store.tracks);
  }

  // TODO: Move to AddTrack page
  addTrack() {
    this.newTrack.id = uuid();
    this.store.dispatch(new AddTrackAction(this.newTrack));
    this.newTrack = { id: '', title: '', artist: '' };
  }

  currentTrackStyle() {
    return {
      'background-image': 'url("' + this.currentTrack.image.url + '")',
      'background-size': 'cover',
      'background-position': '0 50%',
      color: 'inherit'
    };
  }

  upcomingTrackStyle( image ) {
    return {
      'background-image': 'url("' + image.url + '")',
      'background-size': 'cover',
      'background-position': '0 50%',
      color: 'inherit'
    };
  }

  // TODO these really belong in the store since they hold state about a track
  incrementLikes(track) {
    track.likes++;
  }
  incrementDislikes(track) {
    track.dislikes++;
  }

}
