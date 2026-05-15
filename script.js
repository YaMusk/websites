// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lightbox-img');

document.querySelectorAll('.map-card img').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});

function closeLightbox() { lightbox.classList.remove('open'); }

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Collapsible abstracts
document.querySelectorAll('.has-abstract').forEach(span => {
  span.addEventListener('click', () => {
    const row = document.getElementById(span.dataset.abstract);
    const isOpen = row.classList.toggle('open');
    span.classList.toggle('open', isOpen);
  });
});
