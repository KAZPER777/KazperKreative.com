document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.studio-carousel').forEach((section) => {
    const images = section.querySelectorAll('.carousel-image');
    const prev = section.querySelector('.carousel-btn.prev');
    const next = section.querySelector('.carousel-btn.next');
    let index = 0;

    function showImage(i) {
      images.forEach((img, idx) => {
        img.classList.toggle('active', idx === i);
      });
    }

    prev.addEventListener('click', (e) => {
      e.stopPropagation();
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });

    next.addEventListener('click', (e) => {
      e.stopPropagation();
      index = (index + 1) % images.length;
      showImage(index);
    });

    showImage(index);
  });
});
