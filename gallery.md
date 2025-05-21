---
layout: gallery
title: "Gallery"
permalink: /gallery/
---

<h2>Gallery</h2>

<div class="image-grid">
  {% for image in site.data.gallery %}
    <div class="gallery-item">
      <img src="{{ '/assets/img/gallery/' | append: image.file }}" alt="Gallery image"
           onclick="openModal(this)" data-caption="{{ image.caption }}">
    </div>
  {% endfor %}
</div>

<!-- Modal -->
<div id="modal" class="modal" style="display:none;">
  <span class="modal-close" onclick="closeModal()">&times;</span>
  <div class="modal-inner">
    <div class="modal-inner-content">
      <div class="modal-img-container">
        <img class="modal-content" id="modal-img" draggable="false" alt="">
      </div>
      <div id="modal-caption" class="modal-caption"></div>
    </div>
  </div>
</div>

<style>
.image-grid {
  column-count: 1;
  column-gap: 10px;
  margin-top: 20px;
}

@media (min-width: 600px) {
  .image-grid {
    column-count: 2;
  }
}

@media (min-width: 900px) {
  .image-grid {
    column-count: 3;
  }
}

.gallery-item {
  display: inline-block;
  margin-bottom: 10px;
  width: 100%;
}

/* Modal styles */
.modal {
  position: fixed;
  z-index: 999;
  inset: 0;
  background-color: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer; /* pointer cursor on overlay */
}

.modal-close {
  position: fixed;
  top: 15px; right: 35px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
  user-select: none;
}

.modal-inner {
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  box-sizing: border-box;
  cursor: default;
}

.modal-inner-content {
  padding: 2vh 10vw;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-img-container {
  max-width: 100%;
  max-height: calc(100vh - 80px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.modal-content {
  max-width: 100%;
  max-height: 100%;
  user-select: none;
  -webkit-user-drag: none;
  cursor: grab;
  transition: transform 0.2s ease;
  display: block;
  margin: 0 auto;
  flex-shrink: 0;
}

.modal-caption {
  margin-top: 12px;
  padding: 8px 16px;
  color: #eee;
  font-size: 16px;
  max-width: 90vw;
  border-radius: 4px;
  user-select: none;
  word-wrap: break-word;
  flex-shrink: 0;
  line-height: 1.3;
  min-height: 40px;
}
</style>

<script src="https://unpkg.com/@panzoom/panzoom@4.6.0/dist/panzoom.min.js"></script>

<script>
let panzoomInstance = null;

function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");

  modal.style.display = "flex";

  if (panzoomInstance) {
    panzoomInstance.destroy();
    panzoomInstance = null;
  }
  modalImg.style.transform = "none";

  modalImg.src = img.src;
  modalCaption.textContent = img.getAttribute("data-caption");

  modalImg.onload = () => {
    panzoomInstance = Panzoom(modalImg, {
      maxScale: 5,
      minScale: 1,
      contain: 'outside',
      cursor: 'grab',
      disablePanOutside: true,
    });
    modalImg.parentElement.addEventListener('wheel', panzoomInstance.zoomWithWheel);
  };
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";

  if (panzoomInstance) {
    panzoomInstance.destroy();
    panzoomInstance = null;
  }

  const modalImg = document.getElementById("modal-img");
  modalImg.src = "";
  modalImg.style.transform = "none";

  document.getElementById("modal-caption").textContent = "";
}

// Close modal if clicking anywhere except the image itself
document.getElementById("modal").addEventListener("click", function(e) {
  const modalImg = document.getElementById("modal-img");
  if (e.target !== modalImg) {
    closeModal();
  }
});

// Close modal on pressing ESC key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" || e.key === "Esc") {
    const modal = document.getElementById("modal");
    if (modal.style.display === "flex") {
      closeModal();
    }
  }
});
</script>
