export function readConfig(search = window.location.search) {
  const params = new URLSearchParams(search);
  return {
    // Portable story play is the default. Hardware connects only by explicit URL.
    remnant: params.get('remnant')?.trim() || '',
    mock: params.get('mock') === '1',
  } as const;
}

export const config = readConfig();
