document.addEventListener('DOMContentLoaded', () => {
    // Access environment variables injected by Vite at build time
    const heroTitle = import.meta.env.VITE_HEROTITLE;
    const heroSubtitle = import.meta.env.VITE_HEROSUBTITLE;
    const ctaText = import.meta.env.VITE_CTATEXT;
    const ctaLink = import.meta.env.VITE_CTALINK;

    const heroTitleElement = document.getElementById('hero-title');
    const heroSubtitleElement = document.getElementById('hero-subtitle');
    const ctaButtonElement = document.getElementById('cta-button');

    if (heroTitleElement) {
        heroTitleElement.textContent = heroTitle || 'Welcome';
    }

    if (heroSubtitleElement) {
        heroSubtitleElement.textContent = heroSubtitle || 'This is a default subtitle.';
    }

    if (ctaButtonElement) {
        ctaButtonElement.textContent = ctaText || 'Learn More';
        ctaButtonElement.href = ctaLink || '#';
    }
});
