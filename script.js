const container = document.getElementById('floating-hearts');
const maxHearts = 25;
const spawnInterval = 600;

function rand(min, max){ return Math.random()*(max-min)+min; }

function createHeart(){
  const h = document.createElement('div');
  h.className = 'tiny-heart';
  const core = document.createElement('div');
  core.className = 'core';
  h.appendChild(core);

  const size = rand(10, 26);
  h.style.setProperty('--s', size + 'px');
  h.style.left = rand(5, 95) + '%';
  h.style.animationDuration = rand(4, 9) + 's';
  h.style.animationDelay = rand(0, 0.5) + 's';
  h.classList.add('animate');
  container.appendChild(h);

  setTimeout(()=>h.remove(), 10000);
}

setInterval(()=>{
  if(container.children.length < maxHearts) createHeart();
}, spawnInterval);

// Всплеск при клике
const bigHeart = document.querySelector('.big-heart');
if(bigHeart){
  bigHeart.addEventListener('click', ()=>{
    for(let i=0;i<10;i++) createHeart();
  });
}
