document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    // Verifica si el elemento existe antes de agregar el event listener
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (e) => {
            const lang = e.target.value;
            localStorage.setItem('lang', lang);
            translatePage(lang);
        });

        const savedLang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
        languageSwitcher.value = savedLang;
        translatePage(savedLang);
    } else {
        console.log("El elemento 'language-switcher' no se encuentra en el DOM.");
    }
});
