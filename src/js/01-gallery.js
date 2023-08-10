import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const imagesMenuEl = document.querySelector('.gallery');
imagesMenuEl.style.listStyle = 'none';

function createImages(image) {
  return image
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
    )
    .join('');
}

imagesMenuEl.insertAdjacentHTML('beforeend', createImages(galleryItems));

const lightbox = new SimpleLightbox('.gallery__link', {
  captionDelay: 250,
  captionsData: 'alt',
});
