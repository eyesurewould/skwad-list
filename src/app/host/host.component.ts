import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { v4 as uuid } from 'uuid';

import { Party } from '../store/models/party.model';
import { Host } from '../store/models/host.model';
import { AddPartyAction, StartPartyAction, StopPartyAction } from '../store/actions/party.actions';
import { AddHostAction } from '../store/actions/host.actions';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  hostId: string;
  parties: Observable<Array<Party>>;
  pastParties: Observable<Array<Party>>;

  newParty: Party = { partyId: '', title: '' };

  constructor(private store: Store<Host>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.hostId = params.get('id');
    });

    // update state with host ID
    this.store.dispatch(new AddHostAction({ hostId: this.hostId }));

    // these will now update from state
    this.parties = this.store.select(store => store.parties);
    this.pastParties = this.store.select(store => store.pastParties);
  }

  go() {
    console.log('Go: hostId', this.hostId);
    console.log('Go: parties', this.parties);
    console.log('Go: pastParties', this.pastParties);
  }

  openParty(partyId) {
    this.router.navigate(['host', this.hostId, 'party', partyId]);
  }

  addParty() {
    const tempID = uuid.new();
    this.newParty.partyId = uuid();
    this.store.dispatch(new AddPartyAction(this.newParty));
    this.newParty = { partyId: tempID, title: 'Party ' + tempID };
  }

  startParty(partyId) {
    this.store.dispatch(new StartPartyAction(partyId));
  }

  stopParty(partyId) {
    this.store.dispatch(new StopPartyAction(partyId));
  }

}
