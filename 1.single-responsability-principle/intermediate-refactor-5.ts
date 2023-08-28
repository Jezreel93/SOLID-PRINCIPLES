// WITHOUT SRP

/**

    class LibrarySystem {
       books: Map<string, boolean> = new Map(); // Using title as a key, and availability as value

       addBook(title: string) {
           this.books.set(title, true);
           console.log(`Book ${title} added.`);
       }

       isAvailable(title: string): boolean {
           return this.books.get(title) || false;
       }

       issueBook(title: string, memberName: string) {
           if (this.isAvailable(title)) {
               this.books.set(title, false);
               console.log(`${title} issued to ${memberName}.`);
           } else {
               console.log(`${title} is not available.`);
           }
       }

       returnBook(title: string) {
           this.books.set(title, true);
           console.log(`${title} returned to the library.`);
       }
    }

    onst library = new LibrarySystem();
    ibrary.addBook("Moby Dick");
    ibrary.issueBook("Moby Dick", "John");
    ibrary.returnBook("Moby Dick");

*/

class BookManager {
    books: Map<string, boolean> = new Map();

    addBook(title: string){
        this.books.set(title, true);
    }

    getBook(title: string){
        return this.books.get(title);
    }

    updateBook(title: string, availability: boolean){
        this.books.set(title, availability)
    }
}

class BookStore {
    bookManager: BookManager

    constructor(bookManager: BookManager){
        this.bookManager = bookManager;
    }

    addBook(title: string){
        this.bookManager.addBook(title)
        console.log(`Book ${title} added.`);
    }

    returnBook(title: string) {
        this.bookManager.updateBook(title, true);
        console.log(`${title} returned to the library.`);
    }

    issueBook(title: string, memberName: string){

        if(!this.isBookAvailable(title)) {
           return console.log(`${title} is not available.`);
        }
        this.bookManager.updateBook(title, false);
        console.log(`${title} issued to ${memberName}.`);
    }

    private isBookAvailable(title: string) {
        return this.bookManager.getBook(title) || false;
    }
}

const bookManager = new BookManager();

bookManager.addBook('The lord of the rings')
bookManager.addBook('The hobbit')
bookManager.addBook('The silmarillion')
bookManager.addBook('The children of Hurin')
bookManager.addBook('The fall of Gondolin')

const bookStore = new BookStore(bookManager);

bookStore.issueBook('The lord of the rings', 'John')
bookStore.issueBook('The hobbit', 'John')

bookStore.issueBook('The lord of the rings', 'Mary')
bookStore.returnBook('The lord of the rings')
bookStore.issueBook('The lord of the rings', 'Mary')
