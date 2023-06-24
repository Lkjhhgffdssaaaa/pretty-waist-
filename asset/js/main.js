const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.getElementById('more');
const dotsText = document.getElementById('dots');

readMoreBtn.addEventListener('click', function() {
  if (dotsText.style.display === 'none') {
    dotsText.style.display = 'inline';
    readMoreBtn.textContent = 'Read More';
    moreText.style.display = 'none';
  } else {
    dotsText.style.display = 'none';
    readMoreBtn.textContent = 'See Less';
    moreText.style.display = 'inline';
  }
});

const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('show');
});

