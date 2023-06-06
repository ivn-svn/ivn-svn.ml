document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.querySelector('.langSelect');
    const enElements = document.querySelectorAll('.en');
    const deElements = document.querySelectorAll('.de');
    const bgElements = document.querySelectorAll('.bg');
    
    class LanguageSelector {
      constructor() {
        this.init();
      }
      
      init() {
        langSelect.addEventListener('change', () => {
          const lang = langSelect.value;
          this.showLanguage(lang);
        });
        this.showLanguage('en');
      }
    
      showLanguage(lang) {
        if (lang === 'en') {
          enElements.forEach(el => el.classList.remove('hidden'));
          deElements.forEach(el => el.classList.add('hidden'));
          bgElements.forEach(el => el.classList.add('hidden'));
        }
        else if (lang === 'de') {
          enElements.forEach(el => el.classList.add('hidden'));
          deElements.forEach(el => el.classList.remove('hidden'));
          bgElements.forEach(el => el.classList.add('hidden'));
        }
        else if (lang === 'bg') {
            enElements.forEach(el => el.classList.add('hidden'));
            deElements.forEach(el => el.classList.add('hidden'));
            bgElements.forEach(el => el.classList.remove('hidden'));
          }
      }
    }
    
    new LanguageSelector();  });