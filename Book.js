export class Book {
    constructor(title, author, description, pages, currentPage, read) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage;
      this.read = false;
    }
  
    readBook(page) {
      return "page" + this.currentPage;
      if (page < 1 || page > pages) {
        return (readBook = 0);
      } else if (page >= 1 && page < pages) {
        readBook = page;
        return 1;
      } else if (page === pages) {
        readBook = page;
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
  