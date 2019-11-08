import { TrackActionTypes, TrackAction } from '../actions/track.actions';
import { Track } from '../models/track.model';

const initialState: Array<Track> = [
  {
    id: 'XiJaF7sKkbDDjX9VB4pS',
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
    id: 'nKzrtLnCI6wduozyhNR6',
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

export function TrackReducer(state: Array<Track> = initialState, action: TrackAction) {
  switch (action.type) {
    case TrackActionTypes.ADD_TRACK:
      return [...state, action.payload];

    case TrackActionTypes.LIKE_TRACK:
      return state;

    default:
      return state;
  }
}
