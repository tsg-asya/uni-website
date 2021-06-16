// import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const GalleryMy = () => {

    const images = [
      {
        original: '/images/cards-1.jpg',
        thumbnail: '/images/cards-1.jpg',
         },
      {
        original: '/images/1.jpg',
        thumbnail: '/images/1.jpg'
      },
      {
        original: '/images/background.jpg',
        thumbnail: '/images/background.jpg'
      }
    ]

    return (
      <ImageGallery items={images}/>
    );
  

}

export default GalleryMy;