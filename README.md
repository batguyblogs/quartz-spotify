# quartz-spotify

>[!warning]
>Its claude written!!!!!!!

A Quartz v5 component that displays your currently playing (or last played) Spotify track, rendered as an inline SVG widget.

## What it does

This component embeds a live-updating image sourced from a Spotify status endpoint, and periodically refreshes it so the "now playing" state stays current without a full page reload.

## Installation

```bash
npx quartz plugin add github:batguyblogs/quartz-spotify
```

Then add it to your `quartz.config.yaml`:

```yaml
plugins:
  - source: github:batguyblogs/quartz-spotify
    enabled: true
    options:
      endpoint: "https://spotifylive-kappa.vercel.app/"
      refreshInterval: 30000
    layout:
      position: right
      priority: 40
```

## Options

| Option            | Type     | Default                                      | Description                                                      |
| ----------------- | -------- | --------------------------------------------- | ------------------------------------------------------------------ |
| `endpoint`         | `string` | `"https://spotifylive-kappa.vercel.app/"`     | URL returning the Spotify now-playing SVG.                        |
| `refreshInterval`  | `number` | `30000`                                       | How often (in ms) to refresh the widget. Set to `0` to disable.   |

## How it works

The component renders an `<img>` tag pointing at the configured `endpoint`. A small client-side script cache-busts and re-fetches that image on the configured interval, so the widget updates as your currently playing track changes — no rebuild of the site required.

## License

MIT
