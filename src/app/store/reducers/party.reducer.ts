import { PartyActionTypes, PartyAction } from '../actions/party.actions';
import { Party } from '../models/party.model';

const initialState: Array<Party> = [
  {
    partyId: 'XiJaF7sKkbDDjX9VB4pS',
    title: 'Tasha\'s Birthday Jam',
    date: new Date('2019-10-31'),
    isActive: true,
    currentTrackId: '',
    upcomingTracks: [],
    pastTracks: [],
    activeGuests: [],
    invitedGuests: []
  }
];

export function PartyReducer(state: Array<Party> = initialState, action: PartyAction) {
  switch (action.type) {
    case PartyActionTypes.ADD_PARTY:
      return [...state, action.payload];
    case PartyActionTypes.START_PARTY:
      return state;
    case PartyActionTypes.STOP_PARTY:
      return state;
    default:
      return state;
  }
}
