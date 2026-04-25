// Replicates the data processing that useTina() does in React,
// so tinaField() generates valid data-tina-field attribute values
// at Astro SSG build time.

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
  const data = addMetadata(id, JSON.parse(JSON.stringify(response.data)), []);
  return {
    tinaSetup: { id, query: response.query, variables: response.variables, data: response.data },
    data,
  };
}
