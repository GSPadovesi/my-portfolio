export const redirectToLink = (link: string) => {
  const normalized = link.trim();
  if (!normalized) return false;

  window.open(normalized, "_blank", "noopener,noreferrer");
  return true;
};
