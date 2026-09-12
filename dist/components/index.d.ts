import { QuartzComponentConstructor } from '@quartz-community/types';

interface Options {
    endpoint: string;
    refreshInterval: number;
}
declare const SpotifyNowPlaying: QuartzComponentConstructor<Options>;

export { SpotifyNowPlaying, type Options as SpotifyNowPlayingOptions };
