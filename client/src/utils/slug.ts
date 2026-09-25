export function createSlug(title?: string): string {
  if (!title) return 'event';
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_]+/g, '-')  // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
}

export function getEventDetailHash(event: { _id?: string; id?: string; title?: string } | string | any): string {
  if (!event) return '#home';
  if (typeof event === 'string') {
    return `#event-detail-${event}`;
  }
  const id = event._id || event.id || '';
  const slug = createSlug(event.title || '');
  if (slug && id) {
    return `#event-detail-${slug}--${id}`;
  } else if (id) {
    return `#event-detail-${id}`;
  } else if (slug) {
    return `#event-detail-${slug}`;
  }
  return `#home`;
}
