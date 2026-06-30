# quartz-spotify

>[!warning]
>Its claude written!!!!!!!

A [Quartz v5](https://quartz.jzhao.xyz/) component that displays your current or last-played Spotify track using [Readme-Spotify-Now-Playing](https://github.com/Om-Thorat/Readme-Spotify-Now-Playing).

It renders a live SVG badge in your sidebar — under the graph view is a great spot.

## Installation

```bash
npx quartz plugin add github:batguyblogs/quartz-spotify
```

## Usage

Add to your `quartz.config.yaml`:

```yaml
plugins:
  - source: github:batguyblogs/quartz-spotify
    enabled: true
    layout:
      position: right
      priority: 20
```

The `priority: 20` places it just below the Graph View (which defaults to `10`). Adjust as needed.

## How it works

The component renders an `<img>` pointed at a Vercel-hosted instance of [Readme-Spotify-Now-Playing](https://github.com/Om-Thorat/Readme-Spotify-Now-Playing), which returns a dynamically generated SVG showing your now-playing or last-played track. No API keys are embedded — all auth is handled server-side on Vercel.

## License

MIT
