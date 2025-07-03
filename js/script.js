document.addEventListener('DOMContentLoaded', () => {
    // Path to the data file injected by the deployment service
    const dataPath = 'content/tenant-data.json';

    fetch(dataPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Successfully loaded content data:', data);
            updateHeroContent(data);
        })
        .catch(error => {
            console.error('Failed to load content data, using defaults.', error);
            // You can optionally set default content here if the file fails to load
        });
});

function updateHeroContent(data) {
    // Helper to safely get nested properties
    const get = (obj, path, defaultValue = '') => {
        const keys = Array.isArray(path) ? path : path.split('.');
        let result = obj;
        for (const key of keys) {
            if (result === null || result === undefined) return defaultValue;
            result = result[key];
        }
        return result ?? defaultValue;
    };

    // Update Hero Title
    const heroTitle = get(data, 'heroTitle', 'Welcome to Our Website');
    const titleElement = document.getElementById('hero-title');
    if (titleElement) {
        titleElement.textContent = heroTitle;
    }

    // Update Hero Subtitle
    const heroSubtitle = get(data, 'heroSubtitle', 'We provide the best services.');
    const subtitleElement = document.getElementById('hero-subtitle');
    if (subtitleElement) {
        subtitleElement.textContent = heroSubtitle;
    }

    // Update CTA Button
    const ctaText = get(data, 'ctaTitle', 'Get Started');
    const ctaButton = document.getElementById('hero-cta-button');
    if (ctaButton) {
        ctaButton.textContent = ctaText;
        // Optionally, you could set the href from data as well
        // ctaButton.href = get(data, 'ctaLink', '#');
    }

    // Update Brand Colors
    const primaryColor = get(data, 'primaryColor');
    if (primaryColor) {
        document.documentElement.style.setProperty('--primary-color', primaryColor);
    }
}
