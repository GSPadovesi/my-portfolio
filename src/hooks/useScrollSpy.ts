import { useState, useEffect } from 'react';
import { navItems } from '../components/header/Header.constants';


const HEADER_H = 100;

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top <= HEADER_H) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: `-${HEADER_H}px 0px -100% 0px`,
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(`#${item.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
};