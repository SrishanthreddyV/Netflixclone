  const languageToggle = document.getElementById('language-toggle');
  const languageLabel = document.querySelector('label[for="language-toggle"]');
  const languageListItems = document.querySelectorAll('.language-list li');

  if (languageToggle && languageLabel && languageListItems.length > 0) {
  languageListItems.forEach(item => {
    item.addEventListener('click', () => {
      languageLabel.textContent = item.textContent;
      languageToggle.checked = false;
    });
  });
}

