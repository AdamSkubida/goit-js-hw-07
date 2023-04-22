import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const addImagesToGallery = galleryItems.reduce((acc, newImage) => {
  return (
    acc +
    `<li class="gallery__item"><img src="${newImage.preview}" alt="${newImage.description}" class="gallery__image gallery__link"></li>`
  );
}, "");

galleryList.insertAdjacentHTML("beforeend", addImagesToGallery);
