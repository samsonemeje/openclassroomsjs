export class Book {
  constructor(title, author, description, pages) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = 1;
    this.read = false;
  }

  readBook(page) {
    if (page < 1 || page > this.pages) {
      return 0;
    } else if (page >= 1 && page < this.pages) {
      this.currentPage = page;
      return 1;
    } else if (page === this.pages) {
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}

export const books = [
  new Book(
    "things fall apart",
    "chinua achebe",
    "a book you should read",
    250,
    110
  ),
  new Book("lonely streets cry too", "locke smith", "it's horror", 165, 10),
  new Book(
    "he came to set the captives free",
    "rebecca brown",
    "spiritual warfare",
    200,
    73
  )
];
