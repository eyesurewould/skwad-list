import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PartyTrack } from '../store/models/party-track.model';
import { AppState } from '../store/models/app-state.model';
import { inherits } from 'util';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  currentTrack: PartyTrack =
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

  tracks: Observable<Array<PartyTrack>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.tracks = this.store.select(store => store.partyTracks);
  }

  currentTrackStyle() {
    return {
      'background-image': 'url("' + this.currentTrack.image.url + '")',
      'background-size': 'cover',
      'color': 'inherit'
    }
  }

  upcomingTrackStyle( image ) {
    return {
      'background-image': 'url("' + image.url + '")',
      'background-size': 'cover',
      'color': 'inherit'
    }
  }

  incrementLikes(track) {
    track.likes++
  }
  incrementDislikes(track) {
    track.dislikes++
  }
}
