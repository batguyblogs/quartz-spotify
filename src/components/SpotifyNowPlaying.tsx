import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import script from "./scripts/script.inline"
import styles from "./styles/styles.scss"

interface Options {
  endpoint: string
  refreshInterval: number // ms; set to 0 to disable auto-refresh
}

const defaultOptions: Options = {
  endpoint: "https://spotifylive-kappa.vercel.app/",
  refreshInterval: 30000,
}

const SpotifyNowPlaying: QuartzComponentConstructor<Options> = (
  userOpts?: Partial<Options>,
) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Component: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`spotify-now-playing ${displayClass ?? ""}`}>
        <img
          id="spotify-now-playing-img"
          src={opts.endpoint}
          data-endpoint={opts.endpoint}
          data-refresh-interval={opts.refreshInterval}
          alt="Currently playing on Spotify"
          loading="lazy"
        />
      </div>
    )
  }

  Component.css = styles
  Component.afterDOMLoaded = script as unknown as string
  return Component
}

export default SpotifyNowPlaying
export type { Options as SpotifyNowPlayingOptions }