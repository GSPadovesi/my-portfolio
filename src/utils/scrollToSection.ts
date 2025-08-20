export const scrollToSection = (sectionId: string) => {
  const el = document.querySelector(`#${sectionId}`) as HTMLElement | null;
  if (!el) return;
  
  const y = el.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top: y, behavior: 'smooth' });
};