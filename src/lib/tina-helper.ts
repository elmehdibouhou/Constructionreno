// Replicates the data processing that useTina() does in React,
// so tinaField() generates valid data-tina-field attribute values
// at Astro SSG build time.

// TinaCloud transforms `type:"image"` field values to CDN URLs like:
//   https://assets.tina.io/<clientId>/images/services/...
// Our images live in public/images/... and must be served as /images/...
// This regex strips the CDN prefix so paths resolve correctly.
const TINA_CDN_RE = /^https:\/\/assets\.tina\.io\/[^/]+\//;

function normalizeTinaUrls(obj: any): any {
  if (typeof obj === 'string') {
    if (TINA_CDN_RE.test(obj)) {
      const stripped = obj.replace(TINA_CDN_RE, '');
      // Only rewrite our static /images/ assets — TinaCloud doesn't host those.
      // Uploaded files (anything else) ARE hosted on the TinaCloud CDN, so keep the URL.
      return stripped.startsWith('images/') ? '/' + stripped : obj;
    }
    return obj;
  }
  if (Array.isArray(obj)) return obj.map(normalizeTinaUrls);
  if (obj !== null && typeof obj === 'object') {
    const out: any = {};
    for (const [k, v] of Object.entries(obj)) out[k] = normalizeTinaUrls(v);
    return out;
  }
  return obj;
}

function hashFromQuery(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char & 4294967295;
  }
  return Math.abs(hash).toString(36);
}

const SKIP_KEYS = new Set([
  '__typename', '_sys', '_internalSys', '_values', '_internalValues',
  '_content_source', '_tina_metadata',
]);

function addMetadata(id: string, obj: any, path: (string | number)[]): any {
  if (obj === null) return obj;
  if (obj instanceof String) return obj.valueOf();
  if (typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) {
    return obj.map((item, i) => addMetadata(id, item, [...path, i]));
  }
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = SKIP_KEYS.has(key) ? value : addMetadata(id, value, [...path, key]);
  }
  result._content_source = { queryId: id, path };
  return result;
}

// Exported for pages that use getCollection() instead of TinaClient.
// Handles CDN URLs that TinaCloud may write into markdown when editing via admin.
export function normalizeImgSrc(src: string | undefined | null): string {
  if (!src) return '';
  // TinaCMS sometimes writes /uploads/images/... when the file lives in /images/
  if (src.startsWith('/uploads/images/')) return src.replace('/uploads/images/', '/images/');
  if (!TINA_CDN_RE.test(src)) return src;
  const stripped = src.replace(TINA_CDN_RE, '');
  return stripped.startsWith('images/') ? '/' + stripped : src;
}

export interface TinaSetup {
  id: string;
  query: string;
  variables: Record<string, unknown>;
  data: unknown;
}

export function prepareTinaData(response: { query: string; variables: any; data: any }): {
  tinaSetup: TinaSetup;
  data: any;
} {
  const id = hashFromQuery(JSON.stringify({ query: response.query, variables: response.variables }));
  const data = addMetadata(id, normalizeTinaUrls(JSON.parse(JSON.stringify(response.data))), []);
  return {
    tinaSetup: { id, query: response.query, variables: response.variables, data: response.data },
    data,
  };
}
