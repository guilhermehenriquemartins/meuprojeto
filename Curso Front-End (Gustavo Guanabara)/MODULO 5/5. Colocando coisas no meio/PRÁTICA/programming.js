const input = document.getElementById('meuNome');
const label = document.querySelector('.placeholder-label');

input.addEventListener('focus', () => {
  label.style.top = '0';
  label.style.transform = 'translateY(-100%)';
  label.style.fontSize = '12px';
});

input.addEventListener('blur', () => {
    if (input.value === '') {
        label.style.top = '65%';
        label.style.transform = 'translateY(-100%)';
        label.style.fontSize = '16px';
    }
});