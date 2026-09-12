// @ts-nocheck
export default function setupSpotifyWidget() {
  const img = document.querySelector<HTMLImageElement>("#spotify-now-playing-img")
  if (!img) return

  const endpoint = img.dataset.endpoint
  const interval = Number(img.dataset.refreshInterval ?? 30000)
  if (!endpoint || interval <= 0) return

  const refresh = () => {
    img.src = `${endpoint}${endpoint.includes("?") ? "&" : "?"}t=${Date.now()}`
  }

  const id = window.setInterval(refresh, interval)
  window.addCleanup(() => window.clearInterval(id))
}

document.addEventListener("nav", setupSpotifyWidget)