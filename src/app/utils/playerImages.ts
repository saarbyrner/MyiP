/**
 * Pick a stable player image from the local `src/app/assets/player_images` folder.
 * Uses Vite's `import.meta.glob` to eagerly load images as URLs.
 */
export function getImageForPlayer(key: string): string {
  try {
    const modules = import.meta.glob('/src/app/assets/player_images/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' }) as Record<string, string>;
    const urls = Object.values(modules);
    if (!urls || urls.length === 0) return "";

    // Stable hash of the key (playerId or playerName) to pick an image
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h = (h << 5) - h + key.charCodeAt(i);
      h |= 0;
    }
    const idx = Math.abs(h) % urls.length;
    const url = urls[idx];
    try { console.debug(`[getImageForPlayer] key=${key} -> ${url}`); } catch (e) {}
    return url;
  } catch (e) {
    return "";
  }
}

export default getImageForPlayer;
