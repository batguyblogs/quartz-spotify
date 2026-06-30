# quartz-spotify

A [Quartz v5](https://quartz.jzhao.xyz/) component that displays your current or last-played Spotify track using [spotifylive](https://github.com/Th3Wall/spotifylive).

It renders a live SVG badge in your sidebar — under the graph view is a great spot.

## Installation

```bash
npx quartz plugin add github:Askbatguy/quartz-spotify
```

## Usage

Add to your `quartz.config.yaml`:

```yaml
plugins:
  - source: github:Askbatguy/quartz-spotify
    enabled: true
    layout:
      position: left
      priority: 65
```

The `priority: 65` places it just below the Graph View (which defaults to `60`). Adjust as needed.

## How it works

The component renders an `<img>` pointed at a Vercel-hosted instance of [spotifylive](https://github.com/Th3Wall/spotifylive), which returns a dynamically generated SVG showing your now-playing or last-played track. No API keys are embedded — all auth is handled server-side on Vercel.

## License

MIT
