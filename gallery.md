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
<div id="modal" class="modal" onclick="closeModal()">
  <span class="modal-close">&times;</span>
  <img class="modal-content" id="modal-img">
  <div id="modal-caption" class="modal-caption"></div>
</div>

<style>
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 20px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

.modal {
  display: none;
  position: fixed;
  z-index: 999;
  padding-top: 60px;
  left: 0; top: 0;
  width: 100%; height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.85);
  text-align: center;
}

.modal-content {
  margin: auto;
  display: block;
  max-width: 90%;
  max-height: 80vh;
}

.modal-close {
  position: absolute;
  top: 15px; right: 35px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

.modal-caption {
  margin-top: 15px;
  color: #ccc;
  font-size: 16px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
function openModal(img) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  var modalCaption = document.getElementById("modal-caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  modalCaption.textContent = img.getAttribute("data-caption");
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
</script>
