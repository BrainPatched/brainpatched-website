
document.addEventListener('DOMContentLoaded', ()=>{
  const themeBtn = document.getElementById('theme-toggle');
  const langBtn = document.getElementById('lang-toggle');
  const savedTheme = localStorage.getItem('bp_theme') || 'dark';
  const savedLang = localStorage.getItem('bp_lang') || 'es';
  document.documentElement.setAttribute('data-theme', savedTheme);
  setLang(savedLang);
  themeBtn.addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', cur);
    localStorage.setItem('bp_theme', cur);
  });
  langBtn.addEventListener('click', ()=>{
    const cur = localStorage.getItem('bp_lang') === 'es' ? 'en' : 'es';
    setLang(cur);
    localStorage.setItem('bp_lang', cur);
  });
  function setLang(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const txt = i18n[lang] && i18n[lang][key] ? i18n[lang][key] : el.textContent;
      el.innerHTML = txt;
    });
    localStorage.setItem('bp_lang', lang);
  }
  fetch('manifest.json').then(r=>r.json()).then(man=>{
    const container = document.getElementById('blog-list');
    man.posts.forEach(p=>{
      const div=document.createElement('div');div.className='post';
      div.innerHTML=`<h4>${p.title}</h4><div class="meta">${p.date} · ${p.tags.join(', ')}</div><p>${p.excerpt}</p><a href="${p.path}">Leer →</a>`;
      container.appendChild(div);
    });
  });
});
const i18n = {es:{"nav_about":"Sobre","nav_members":"Miembros","nav_ctfs":"CTFs","nav_writeups":"Writeups","nav_resources":"Recursos","nav_blog":"Blog","nav_contact":"Contacto","hero_tagline":"Think. Patch. Hack.","hero_lead":"Somos <strong>Brain Patched</strong>, un colectivo de 5 hackers éticos y entusiastas de la ciberseguridad."},en:{"nav_about":"About","nav_members":"Members","nav_ctfs":"CTFs","nav_writeups":"Writeups","nav_resources":"Resources","nav_blog":"Blog","nav_contact":"Contact","hero_tagline":"Think. Patch. Hack.","hero_lead":"We are <strong>Brain Patched</strong>, a 5-person collective of ethical hackers and cybersecurity enthusiasts."}};

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
  const twitterBtn = document.querySelector('a[href="https://twitter.com/BrainPatched"]');
  if (twitterBtn) {
    twitterBtn.addEventListener("click", (e) => {
      e.preventDefault(); // evita que abra el enlace
      alert("Lo abriremos pronto 🧠");
    });
  }
});
