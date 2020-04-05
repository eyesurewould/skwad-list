export interface Track {
  trackId?: string;
  title: string;
  artist: string;
  album?: string;
  length?: number;
  remaining?: number;
  likes?: number;
  dislikes?: number;
  image?: {
    url: string;
    isDark?: boolean;
  };
}
