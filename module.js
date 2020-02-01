import { createCurrentBookTab, ch } from './functions.js';
const carouselInner = document.getElementById('carousel-inner');
import { books } from './Book.js';

const bookItems = [];
books.forEach(book => bookItems.push(createCurrentBookTab(book)));
if (books.length) bookItems[0].classList.add('active');
bookItems.forEach(item => carouselInner.appendChild(item));
let rC = 0;
let bC = 0;

document.addEventListener('pr', () => {rC++;r();});document.addEventListener('br', () => {bC++;r();});
const r = () => {
  if (rC === 3 && bC === 3) {
     ch();
  }
};
