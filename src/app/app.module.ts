import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyComponent } from './party/party.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';

import { PartyTrackReducer } from './store/reducers/party-track.reducer';

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


@NgModule({
  declarations: [
    AppComponent,
    PartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatBadgeModule,
    StoreModule.forRoot({
     partyTracks: PartyTrackReducer
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
