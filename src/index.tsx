import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { componentRegistry } from "@jackyzha0/quartz/components/registry"

const Spotify: QuartzComponentConstructor = (_userOpts?: unknown) => {
  const SpotifyComponent: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`spotify-container ${displayClass ?? ""}`}>
        <img
          src="https://spotifylive-kappa.vercel.app/"
          alt="Spotify Playback"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
    )
  }

  SpotifyComponent.css = `
    .spotify-container {
      margin: 1.5rem 0;
      display: flex;
      justify-content: center;
    }
    .spotify-container img {
      max-width: 100%;
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
    }
  `

  return SpotifyComponent
}

componentRegistry.register("quartz-spotify", Spotify)
export { Spotify }
export default Spotify
