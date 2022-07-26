import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

// CREATING a template render from the array for each image
function createGalleryMarkup(items) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");

  return markup;
}

// PUBLISHING a new markup/template with insertAdjacentHTML
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

// ADD EventListener on the click event to the gallery div
galleryEl.addEventListener("click", onPictureContainerClick);

// Function that is calling SimpleLightbox with captions specified as options
function onPictureContainerClick(event) {
  event.preventDefault(); // prevents a user to be redirected to open a picture

  let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionType: "attr",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
