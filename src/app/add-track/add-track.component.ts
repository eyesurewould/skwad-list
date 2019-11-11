import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../app.config';
import { Track } from '../store/models/track.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.scss']
})
export class AddTrackComponent implements OnInit, OnDestroy {
  trackRefs: AngularFirestoreCollection<Track>;
  tracks$: Observable<Track[]>;

  constructor(private db: AngularFirestore) {
    this.trackRefs = this.db.collection<Track>(config.collection_all_tracks);
    this.tracks$ = this.trackRefs.valueChanges();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.tracks$.unsubscribe()
  }
}
