import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
  MatProgressBarModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
