// Nav scroll shadow
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));

  // Close on link click
  nav.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (nav.classList.contains('open') && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}

// Publication image lightbox
const pubLightbox = document.getElementById('pub-lightbox');
const pubLightboxImage = document.getElementById('pub-lightbox-image');
const pubLightboxCaption = document.getElementById('pub-lightbox-caption');
const pubLightboxClose = document.getElementById('pub-lightbox-close');
const pubLightboxBackdrop = document.getElementById('pub-lightbox-backdrop');

function openPublicationLightbox(link) {
  if (!pubLightbox || !pubLightboxImage || !pubLightboxCaption) {
    return;
  }

  pubLightboxImage.src = link.href;
  pubLightboxImage.alt = link.querySelector('img')?.alt || '';
  pubLightboxCaption.textContent = link.dataset.caption || '';
  pubLightbox.classList.add('open');
  pubLightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePublicationLightbox() {
  if (!pubLightbox || !pubLightboxImage) {
    return;
  }

  pubLightbox.classList.remove('open');
  pubLightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  pubLightboxImage.src = '';
  pubLightboxImage.alt = '';
  if (pubLightboxCaption) {
    pubLightboxCaption.textContent = '';
  }
}

document.querySelectorAll('.pub-image-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    openPublicationLightbox(link);
  });
});

if (pubLightboxClose) {
  pubLightboxClose.addEventListener('click', closePublicationLightbox);
}

if (pubLightboxBackdrop) {
  pubLightboxBackdrop.addEventListener('click', closePublicationLightbox);
}

document.addEventListener('keydown', event => {
  if (!pubLightbox || !pubLightbox.classList.contains('open')) {
    return;
  }

  if (event.key === 'Escape') {
    closePublicationLightbox();
  }
});
