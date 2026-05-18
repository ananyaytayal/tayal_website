import { useEffect, useState } from "react";

export function GlobalEffects() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Custom cursor
    const cursor = document.createElement('div');
    const cursorRing = document.createElement('div');

    cursor.className = 'custom-cursor';
    cursorRing.className = 'custom-cursor-ring';

    cursor.style.cssText = `
      width: 8px;
      height: 8px;
      background: #4a7493;
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.15s ease;
      mix-blend-mode: screen;
    `;

    cursorRing.style.cssText = `
      width: 32px;
      height: 32px;
      border: 1.5px solid #4a7493;
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9998;
      transition: all 0.25s ease;
      opacity: 0.6;
    `;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorRing);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(1.5)';
      cursorRing.style.transform = 'scale(1.5)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
      cursorRing.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', updateCursor);

    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Scroll progress and scroll to top visibility
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Show/hide scroll to top button
      const scrollToTopBtn = document.getElementById('scrollToTop');
      if (scrollToTopBtn) {
        if (scrollTop > 300) {
          scrollToTopBtn.classList.add('show');
        } else {
          scrollToTopBtn.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', updateScrollProgress);

    // Scroll to top on page change
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Listen for navigation events
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      document.body.removeChild(cursor);
      document.body.removeChild(cursorRing);
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Line */}
      <div
        className="fixed top-16 left-0 h-0.5 bg-brand-400 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-40">
        {/* WhatsApp */}
        <a
          href="https://wa.me/8887373451?text=Hello%20Shri%20Laxmi%20Enterprise%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>

        {/* Contact */}
        <a
          href="mailto:shrilaxmienterprises7@gmail.com"
          className="w-12 h-12 bg-brand-400 hover:bg-brand-500 text-brand-950 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          title="Send Email"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-brand-800 hover:bg-brand-700 text-brand-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg opacity-0 translate-y-4"
          id="scrollToTop"
          title="Scroll to Top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  );
}