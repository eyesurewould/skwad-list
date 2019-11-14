import { PartyTrackActionTypes, PartyTrackAction } from '../actions/party-track.actions';
import { PartyTrack } from '../models/party-track.model';

const initialState: Array<PartyTrack> = [
  {
    id: '1',
    title: 'All my love (is 4u)',
    artist: 'Not Prince',
    album: 'Sony Ate My Lunch',
    length: 187,
    remaining: 187,
    likes: 2,
    dislikes: 1,
    image: {
      url: 'https://miro.medium.com/max/500/1*u19U8VxkMuzv3zBGL9Ee6w.jpeg',
      isDark: false
    }
  },
  {
    id: '2',
    title: 'Dad emptied the pool',
    artist: 'Sk8Rex',
    album: 'Busted Teeth',
    length: 224,
    remaining: 224,
    likes: 2,
    dislikes: 0,
    image: {
      url: 'https://miro.medium.com/max/500/1*ML5MvO4zy7JNHuwzWqCoSw.jpeg',
      isDark: true
    }
  },
  {
    id: '3',
    title: '(sad) Again, Forever',
    artist: 'Pretentia Absentia',
    album: 'Moods',
    length: 501,
    remaining: 501,
    likes: 0,
    dislikes: 0,
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Velvet_Underground_and_Nico.jpg',
      isDark: false
    }
  }
];

export function PartyTrackReducer(state: Array<PartyTrack> = initialState, action: PartyTrackAction) {
  switch (action.type) {
    case PartyTrackActionTypes.ADD_TRACK:
      return [...state, action.payload];

    case PartyTrackActionTypes.LIKE_TRACK:
      return state;

    default:
      return state;
  }
}
