const intro=document.getElementById('intro'),content=document.getElementById('content'),openBtn=document.getElementById('openBtn');
openBtn.addEventListener('click',()=>{intro.classList.add('hidden');content.classList.remove('hidden');window.scrollTo(0,0)});
const songBtn=document.getElementById('songBtn'),player=document.getElementById('player'),yt=document.getElementById('yt');
songBtn.addEventListener('click',()=>{player.classList.remove('hidden');yt.src='https://www.youtube.com/embed/tiz4LP5aoMw?autoplay=1&rel=0';songBtn.textContent='♡ Reproduciendo nuestra canción';songBtn.disabled=true});
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImg'),close=document.getElementById('closeLightbox');
document.querySelectorAll('.photo img').forEach(img=>img.addEventListener('click',()=>{lbImg.src=img.src;lb.classList.remove('hidden')}));
close.addEventListener('click',()=>lb.classList.add('hidden'));lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.add('hidden')});
