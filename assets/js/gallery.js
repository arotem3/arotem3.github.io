const items = Array.from(document.querySelectorAll('.gallery-item'));
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.getElementById('modal-close');
const prevBtn = document.getElementById('modal-prev');
const nextBtn = document.getElementById('modal-next');

let current = 0;
let pz = null;

function openModal(index) {
  current = index;
  renderModal();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  destroyPanzoom();
  modalContent.innerHTML = '';
}

function destroyPanzoom() {
  if (pz) { pz.destroy(); pz = null; }
}

function renderModal() {
  destroyPanzoom();
  modalContent.innerHTML = '';

  const item = items[current];
  const caption = item.dataset.caption || '';
  const isVideo = item.dataset.type === 'video';

  modalCaption.textContent = caption;

  if (isVideo) {
    const video = document.createElement('video');
    const src = item.querySelector('video').src;
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    modalContent.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = item.querySelector('img').src;
    img.alt = item.querySelector('img').alt || '';
    modalContent.appendChild(img);

    img.addEventListener('load', () => {
      if (typeof Panzoom !== 'undefined') {
        pz = Panzoom(img, { maxScale: 5, contain: 'outside' });
        img.addEventListener('wheel', pz.zoomWithWheel, { passive: false });
      }
    });
  }
}

function navigate(dir) {
  current = (current + dir + items.length) % items.length;
  renderModal();
}

// Attach item click handlers
items.forEach((item, i) => {
  item.addEventListener('click', () => openModal(i));

  // Hover-play for video items
  if (item.dataset.type === 'video') {
    const video = item.querySelector('video');
    item.addEventListener('mouseenter', () => video.play().catch(() => {}));
    item.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  }
});

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(1));

// Click outside modal content to close
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape')      closeModal();
  if (e.key === 'ArrowLeft')   navigate(-1);
  if (e.key === 'ArrowRight')  navigate(1);
});
