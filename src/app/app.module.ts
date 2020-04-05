import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TODO: We're importing WAY MORE than we need to here.
// Later we can tree - shake this and thin it down
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatBadgeModule
} from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { StoreModule } from '@ngrx/store';
import { TrackReducer } from './store/reducers/track.reducer';
import { PartyComponent } from './party/party.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { HostComponent } from './host/host.component';

const reducers = {
  tracks: TrackReducer
};


@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
    AddTrackComponent,
    HostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatBadgeModule,

    StoreModule.forRoot(reducers /*, { metaReducers }*/),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }) : []

    /* StoreModule.forRoot({
     tracks: TrackReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
