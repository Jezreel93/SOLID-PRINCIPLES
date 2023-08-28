// WITHOUT SRP

/**
 class Book {
  title: string;
  author: string;
  content: string;

  constructor(title: string, author: string, content: string) {
    this.title = title;
    this.author = author;
    this.content = content;
  }

  printBook() {
    // logic to print the book's content
    console.log(`Printing the book: ${this.title} by ${this.author}.`);
  }
}
**/

// WITH SRP

class Book {
    
    title: string;
    author: string;
    content: string;

    constructor( title: string, author: string, content: string ){
        this.title = title;
        this.author = author;
        this.content = content;
    }
}

class BookPrinter {

    printBook( book: Book ) {
        // logic to print the book's content
        console.log(`Printing the book: ${book.title} by ${book.author}.`);
    }
}

const book = new Book( 'The Alchemist', 'Paulo Coelho', 'A book about following your dreams.' );
const bookPrinter = new BookPrinter();

bookPrinter.printBook( book );