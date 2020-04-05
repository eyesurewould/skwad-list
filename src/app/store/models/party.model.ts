import { Track } from './track.model';
import { Guest } from './guest.model';

export interface Party {
  partyId?: string;
  title: string;
  date?: Date;
  isActive?: boolean;
  currentTrackId?: string;
  upcomingTracks?: Track[];
  pastTracks?: Track[];
  activeGuests?: Guest[];
  invitedGuests?: Guest[];
}
