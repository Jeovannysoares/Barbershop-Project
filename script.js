// ── CURSOR PERSONALIZADO ──
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// ── NAVBAR AO ROLAR ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ── CONTADORES ANIMADOS ──
function animateCount(el, target, suffix = '', duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start) + suffix;
    if (start >= target) clearInterval(timer);
  }, 16);
}

const heroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    setTimeout(() => {
      animateCount(document.getElementById('stat1'), 5, '+');
      animateCount(document.getElementById('stat2'), 2, 'k+');
    }, 1200);
    heroObserver.disconnect();
  }
});

heroObserver.observe(document.getElementById('inicio'));

// ── CARROSSEL DE DEPOIMENTOS ──
const testimonials = [
  {
    stars: '★★★★★',
    text: 'Melhor barbearia que já fui. O William tem uma habilidade incrível, e a experiência completa com a toalha quente é simplesmente fantástica.',
    name: 'Carlos M.',
    since: 'Cliente há 5 anos',
    icon: '👨'
  },
  {
    stars: '★★★★★',
    text: 'O Combo Premium vale cada centavo. Sai de lá renovado, a barba perfeita e a pele hidratada. Recomendo pra qualquer homem que se cuida.',
    name: 'Felipe R.',
    since: 'Cliente há 3 anos',
    icon: '🧔'
  },
  {
    stars: '★★★★★',
    text: 'Ambiente sofisticado, atendimento atencioso e resultado impecável. O William faz um degradê que ninguém bate. Virei cliente fiel.',
    name: 'André T.',
    since: 'Cliente há 2 anos',
    icon: '👨‍💼'
  },
  {
    stars: '★★★★★',
    text: 'Fui pela primeira vez e já saí agendando o próximo.',
    name: 'Lucas P.',
    since: 'Novo cliente',
    icon: '👦'
  },
  {
    stars: '★★★★★',
    text: 'A barbearia tem aquele charme de espaço que te faz querer ficar. Produto bom, mão boa, ambiente ótimo. Tudo que um homem precisa.',
    name: 'Rodrigo A.',
    since: 'Cliente há 4 anos',
    icon: '👨‍🦳'
  },
  {
    stars: '★★★★★',
    text: 'Fui no dia do meu casamento e cheguei perfeito na cerimônia. Impossível confiar meu corte e barba a outro lugar. Simplesmente os melhores.',
    name: 'Gabriel S.',
    since: 'Cliente há 1 ano',
    icon: '🤵'
  },
];

const inner = document.getElementById('testimonialsInner');

// Duplica para o efeito de loop infinito
const doubled = [...testimonials, ...testimonials];

inner.innerHTML = doubled.map(t => `
  <div class="testimonial-card">
    <div class="testimonial-stars">${t.stars}</div>
    <p class="testimonial-text">"${t.text}"</p>
    <div class="testimonial-author">
      <div class="testimonial-avatar">${t.icon}</div>
      <div>
        <div class="testimonial-name">${t.name}</div>
        <div class="testimonial-since">${t.since}</div>
      </div>
    </div>
  </div>
`).join('');

// ── FORMULÁRIO DE AGENDAMENTO ──
//function handleBooking(e) {
//  e.preventDefault();
//  const btn = e.target.querySelector('.btn-submit');
//  const original = btn.textContent;

  //btn.textContent = '✓ Agendamento Confirmado!';
  //btn.style.background = '#2d6a2d';
  //btn.style.color = '#fff';

  //setTimeout(() => {
  //  btn.textContent = original;
  //  btn.style.background = '';
  //  btn.style.color = '';
   // e.target.reset();
  //}, 3500);
//}

// Define data mínima como hoje
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
}

// ── MENU MOBILE ──
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', function () {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';

  if (isOpen) {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
    links.style.position = 'fixed';
    links.style.flexDirection = 'column';
    links.style.top = '70px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(10,8,4,0.98)';
    links.style.padding = '2rem';
    links.style.gap = '1.5rem';
    links.style.borderTop = '1px solid rgba(201,168,76,0.1)';
    links.style.zIndex = '99';
  }
});

// Fecha o menu mobile ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    links.style.display = 'none';
  });
});
// ── ABOUT SLIDESHOW AUTOMÁTICO ──
(function () {
  const slides = document.querySelectorAll('.about-slide');
  if (!slides.length) return;
  let current = 0;
  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 2500);
})();
