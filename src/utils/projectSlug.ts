const DIACRITICS_REGEX = /[\u0300-\u036f]/g;

export const toProjectSlug = (value: string) =>
  value
    .normalize('NFD')
    .replace(DIACRITICS_REGEX, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
