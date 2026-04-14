window.addEventListener('scroll', function() {
  const header = document.querySelector('.header-inner');
  if (window.scrollY > 380) {
    header.style.background = '#fff';
  } else {
    header.style.background = 'transparent';
  }
});