const themeButton = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('resume-theme');

if (storedTheme === 'dark') document.body.classList.add('dark');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('resume-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

document.querySelector('.print-button').addEventListener('click', () => window.print());
