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
galleryEl.addEventListener("click", onModalOpen);

// Declaring global variable that will be used in Modal Window
let instance;

// Function to check if the key that pressed is "Escape" key then close the Modal window if it is
function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) {
    onModalClose();
  }
}

// Function that closes the Modal Window
function onModalClose() {
  instance.close();
}

// Function that changes image src and uses basicLightbox to show Modal window
function onModalOpen(event) {
  event.preventDefault(); // prevents a user to be redirected to open a picture

  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    ` <img src = "${event.target.dataset.source}"/>`,
    {
      // instances if modal is open add EventLister
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      // instances if modal is closed remove EventLister
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  // calling basicLightbox to show the modal window
  instance.show();
}
