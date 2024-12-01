export function formatViews(views: number): string {
    if (views >= 1_000_000_000) {
      return (views / 1_000_000_000).toFixed(1).replace('.0', '') + 'bi';
    } else if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1).replace('.0', '') + 'mi';
    } else if (views >= 100_000) {
      return Math.floor(views / 1_000) + 'mil';
    } else if (views >= 1_000) {
      return (views / 1_000).toFixed(1).replace('.0', '') + 'mil';
    }
    return views.toString();
  }
  