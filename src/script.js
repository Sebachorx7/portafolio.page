const menuBtn = document.getElementById('menu-btn');
const header = document.getElementById('header');
const sidebar = document.getElementById('sidebar');
const showmorebtn = document.querySelector('#showmore-btn');
const readmorebtn = document.querySelector('#readmore-btn');
const text = document.querySelector('#readmore-div');


// readmorebtn.addEventListener('click', (e)=>{
//   text.classList.toggle('read-more');
// });

menuBtn.addEventListener('click', () => {

  if (header.classList.toggle('hidden')) {
    menuBtn.classList.add('fixed');
  }
});
showmorebtn.addEventListener('click', (e)=>{
  text.classList.toggle('show-more');
  // if (showmorebtn.innerText === "Show More") {
  //     showmorebtn.innerText = "Show Less";
  //   } else {
  //     showmorebtn.innerText = "Show More";
  //   }
});
window.onscroll = ()=>{
  header.classList.add('hidden');
}