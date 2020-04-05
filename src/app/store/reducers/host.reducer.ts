import { HostActionTypes, HostAction } from '../actions/host.actions';
import { Host } from '../models/host.model';
// import { ContactType } from '../models/contact-type.enum';

export interface State {
  loading: boolean; // indicates loading while fetching data
  hosts: Host[];
}

/* {
    hostId: 'XiJaF7sKkbDDjX9VB4pS',
    name: 'Ian',
    parties: [
      {
        partyId: '1G2Tb5RaYmseW9jmnecE',
        title: ''
      }
    ],
    pastParties: [],
    allGuests: [
      {
        guestId: '34wn4f7h5vw8vhwp9n',
        name: ''
      }
    ]
  } */
const initialState: State = {
  loading: false,
  hosts: []
};

export function HostReducer(state = initialState, action: HostAction): State {
  switch (action.type) {
    case HostActionTypes.ADD_HOST:
      return {...state, action.payload};
    default:
      return state;
  }
}
