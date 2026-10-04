document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('active'));
const lb=document.getElementById('lightbox');
if(lb){document.querySelectorAll('.gallery-item img').forEach(i=>i.addEventListener('click',()=>{lb.querySelector('img').src=i.src;lb.classList.add('open')}));
lb.addEventListener('click',()=>lb.classList.remove('open'));}
const f=document.getElementById('contactForm');
if(f){f.addEventListener('submit',e=>{e.preventDefault();
const v=id=>document.getElementById(id).value;
const body=`From: ${v('name')} (${v('email')})\n\n${v('message')}`;
window.location.href=`mailto:miguel.hernandez@email.com?subject=${encodeURIComponent(v('subject'))}&body=${encodeURIComponent(body)}`;f.reset();});}
