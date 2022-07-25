import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// CREATING a template render from the array for each image
function createGalleryMarkup(items) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">  
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");

  return markup;
}

// console.log(createGalleryMarkup(galleryItems));

// PUBLISHING a new markup/template with insertAdjacentHTML
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

// ADD EventListener on the click event
galleryEl.addEventListener("click", onPictureContainerClick);

// Function that changes image src and uses basicLightbox modal window from the library
function onPictureContainerClick(event) {
  event.preventDefault(); // prevents a user to be redirected to open a picture

  const instance = basicLightbox.create(
    ` <img src = "${event.target.dataset.source}"/>`
  );

  instance.show();
}
