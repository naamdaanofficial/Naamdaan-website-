// Quotes animation and simple contact form (demo)
const quotes = [
  "“Naam वो दीपक है जो भीतर के अंधकार को मिटा देता है।”",
  "“हर सांस में नाम का स्मरण — हर क्षण में शांति।”",
  "“शांति वहीं है जहाँ ‘मैं’ समाप्त होता है।”",
  "“भजन मन का दीपक है — उसे जलाते रहें।”"
];
let idx = 0;
const quoteEl = document.getElementById('quote');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const pauseBtn = document.getElementById('pause');
let interval = null;
function showQuote(i){ if(quoteEl) quoteEl.textContent = quotes[i]; }
function nextQuote(){ idx = (idx+1) % quotes.length; showQuote(idx); }
function prevQuote(){ idx = (idx-1 + quotes.length) % quotes.length; showQuote(idx); }
function startAuto(){ interval = setInterval(nextQuote, 4500); if(pauseBtn) pauseBtn.textContent='Pause'; }
function stopAuto(){ clearInterval(interval); interval = null; if(pauseBtn) pauseBtn.textContent='Play'; }
prevBtn?.addEventListener('click', ()=>{ prevQuote(); if(interval){ stopAuto(); } });
nextBtn?.addEventListener('click', ()=>{ nextQuote(); if(interval){ stopAuto(); } });
pauseBtn?.addEventListener('click', ()=>{ if(interval) stopAuto(); else startAuto(); });
// start
showQuote(idx); startAuto();

// contact form demo behaviour
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  formMsg.textContent = 'धन्यवाद! आपका संदेश प्राप्त हुआ — (demo mode).';
  form.reset();
  setTimeout(()=> formMsg.textContent='', 5000);
});