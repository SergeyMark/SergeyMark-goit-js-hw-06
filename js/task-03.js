const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

gallery.style.display = "flex";

console.log(gallery);

const listGallery = images.map((picture) => `<li style="list-style: none;"><img src="${picture.url}" alt="${picture.alt}" style="width: 250px; height: 200px;"></li>`).join(" ");
gallery.insertAdjacentHTML("beforebegin", listGallery);




// for (const image of images) {
//   const urlPictures = image.url;
//   const altPictures = image.alt;
//   const elementGallery = document.createElement('img');
//   elementGallery.setAttribute("src", urlPictures);
//   elementGallery.setAttribute("alt", altPictures);
//   gallery.append(elementGallery);
// }

// console.log(gallery)


