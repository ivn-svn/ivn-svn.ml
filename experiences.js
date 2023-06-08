document.addEventListener('DOMContentLoaded', () => {
    const langSlider = document.querySelector('.langSlider');
    const langItems = document.querySelectorAll('.langItem');
    const enElements = document.querySelectorAll('.en');
    const deElements = document.querySelectorAll('.de');
    const bgElements = document.querySelectorAll('.bg');
    const switchButtons = document.querySelectorAll('.switch-button');
    const panels = document.querySelectorAll('.panel');
  
    class LanguageSelector {
      constructor() {
        this.init();
      }
  
      init() {
        langItems.forEach(item => {
          item.addEventListener('click', () => {
            const lang = item.dataset.lang;
            this.showLanguage(lang);
          });
        });
        this.showLanguage('en');
      }
  
      showLanguage(lang) {
        langItems.forEach(item => item.classList.remove('active'));
        enElements.forEach(el => el.classList.add('hidden'));
        deElements.forEach(el => el.classList.add('hidden'));
        bgElements.forEach(el => el.classList.add('hidden'));
  
        const activeItem = document.querySelector(`.langItem[data-lang="${lang}"]`);
        activeItem.classList.add('active');
  
        if (lang === 'en') {
          enElements.forEach(el => el.classList.remove('hidden'));
        } else if (lang === 'de') {
          deElements.forEach(el => el.classList.remove('hidden'));
        } else if (lang === 'bg') {
          bgElements.forEach(el => el.classList.remove('hidden'));
        }
      }
    }
  
    class SwitchPanel {
      constructor() {
        this.init();
      }
  
      init() {
        switchButtons.forEach(button => {
          button.addEventListener('click', () => {
            const target = button.dataset.target;
            this.showPanel(target);
          });
        });
        this.showPanel('experience-panel');
      }
  
      showPanel(target) {
        panels.forEach(panel => {
          if (panel.id === target) {
            panel.style.display = 'block';
          } else {
            panel.style.display = 'none';
          }
        });
  
        switchButtons.forEach(button => {
          if (button.dataset.target === target) {
            button.classList.add('selected');
          } else {
            button.classList.remove('selected');
          }
        });
      }
    }
  
    new LanguageSelector();
    new SwitchPanel();
  });
  
  function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    var copyIcon = document.querySelector('.copy-icon');
    copyIcon.classList.add('clicked');
    setTimeout(function() {
      copyIcon.classList.remove('clicked');
    }, 1500);
  }
  