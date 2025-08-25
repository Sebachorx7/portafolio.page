const menuBtn = document.getElementById('menu-btn');
const header = document.getElementById('header');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {

  if (header.classList.toggle('hidden')) {
    menuBtn.classList.add('fixed');
  }
});

window.onscroll = ()=>{
  header.classList.add('hidden');
}