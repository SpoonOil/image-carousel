// imports
import './style.css';
import { ImageCarousel } from './imageCarousel';

// code
const imagesDiv = document.querySelector('.image-carousel-images');
const imageCarousel = new ImageCarousel(imagesDiv);

imageCarousel.next();
