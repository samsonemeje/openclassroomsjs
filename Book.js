export class Book {
    constructor(title, author, description, pages, currentPage) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage;
      this.read = false;
    }
  
    readBook(page) {
      "page" + this.currentPage;
      if (page < 1 || page > pages) {
        return 0;
      } else if (page >= 1 && page < pages) {
        page = this.currentPage;
        return 1;
      } else if (page === pages) {
        page = this.currentPage;
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
  