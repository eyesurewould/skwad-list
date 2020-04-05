import { ContactType } from './contact-type.enum';

export interface Guest {
  guestId: string;
  name: string;
  contact?: {
    type: ContactType;
    handle: string;
  };
}
