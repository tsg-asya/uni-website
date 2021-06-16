import React from 'react';
import Gallery from 'react-photo-gallery';

const GalleryCards = () =>{

 	  
const PHOTO_SET = [

  {

    src: '/images/images-1.jpeg',
    width: 2,
    height: 1,
     
 },
  {
    src: '/images/images-2.jpeg',
    width: 5,
    height: 4
    
  },
  {
    src: '/images/images-3.jpeg',
    width: 5,
    height: 4
    
  },

  {
    src: '/images/images-4.jpeg',
    width: 4,
    height: 4
  
 },
 {
  src: '/images/images-5.jpeg',
  width: 4,
  height: 4

},
{
  src: '/images/images-6.jpeg',
  width: 2,
  height: 2

},
{
  src: '/images/images-7.jpeg',
  width: 4,
  height: 4

},
 {
    src: '/images/images-8.jpeg',
    width: 4,
    height: 4
  
 },
  {
    src: '/images/images-9.jpeg',
    width: 3,
    height: 2
    
  },
  {
    src: '/images/images-10.jpeg',
    width: 3,
    height: 2
    
  },
  {
    src: '/images/images-11.jpeg',
    width: 5,
    height: 4
    
  },
  {
    src: '/images/images-12.jpeg',
    width: 5,
    height: 4
    
  },

  {
    src: '/images/images-13.jpeg',
    width: 4,
    height: 4
  
 },
 {
  src: '/images/images-14.jpeg',
  width: 4,
  height: 4

},
{
  src: '/images/images-15.jpeg',
  width: 3,
  height: 1

},
{
  src: '/images/images-16.jpeg',
  width: 4,
  height: 4

},
 {
    src: '/images/images-17.jpeg',
    width: 4,
    height: 4
  
 },
  {
    src: '/images/images-18.jpeg',
    width: 3,
    height: 2
    
  },
  {
    src: '/images/images-19.jpeg',
    width: 3,
    height: 2
    
  },
  {
    src: '/images/images-20.jpeg',
    width: 3,
    height: 2
    
  }

  ];

return (
  
  <Gallery photos={PHOTO_SET} />
);

}
export default GalleryCards;