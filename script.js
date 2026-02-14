<script>
  const languageToggle = document.getElementById('language-toggle');
  const languageLabel = document.querySelector('label[for="language-toggle"]');
  const languageListItems = document.querySelectorAll('.language-list li');

  languageListItems.forEach(item => {
    item.addEventListener('click', () => {
      languageLabel.textContent = item.textContent; // update label text
      languageToggle.checked = false;               // close dropdown
      // You can add code here to change site language as needed
    });
  });
</script>
