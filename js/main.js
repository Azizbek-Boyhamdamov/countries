const elDarkModeToggle = document.querySelector(".dark-mode-toggle");

elDarkModeToggle.addEventListener('click', function(){
  document.body.classList.toggle('dark-mode');
});

