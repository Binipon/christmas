'use strict';
{

const btn = document.getElementById('btn');
  const screen = document.getElementById('screen');
btn.addEventListener('click', () => {
  screen.classList.toggle('test');
});

}