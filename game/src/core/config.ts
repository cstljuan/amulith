export function readConfig(search = window.location.search) {
  const params = new URLSearchParams(search);
  return {
    remnant: params.get('remnant')?.trim() || 'localhost:8765',
    mock: params.get('mock') === '1',
  } as const;
}

export const config = readConfig();
