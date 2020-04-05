import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartyComponent } from './party/party.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { HostComponent } from './host/host.component';

const routes: Routes = [
  {
    path: 'party/:id',
    component: PartyComponent
  },
  {
    path: 'party/:id/add',
    component: AddTrackComponent
  },
  {
    path: 'host/:id',
    component: HostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
