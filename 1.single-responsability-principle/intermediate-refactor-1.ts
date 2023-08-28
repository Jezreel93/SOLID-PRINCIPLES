// Without SRP

/**

 class Book {
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    applyDiscount(discountPercent: number) {
        this.price = this.price - (this.price * discountPercent / 100);
    }

    getDetailedReport() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPrice: $${this.price.toFixed(2)}`;
    }
}

const book = new Book("1984", "George Orwell", 19.99);
console.log(book.getDetailedReport());
book.applyDiscount(10);
console.log(book.getDetailedReport());

**/

class Book {
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

class Discount {
    static applyDiscount(book: Book, discountPercent: number): void {
        book.price = book.price - (book.price * discountPercent / 100);
    }
}

class ReportGenerator {
    static getDetailedReport(book: Book): string {
        return `Title: ${book.title}\nAuthor: ${book.author}\nPrice: $${book.price.toFixed(2)}`;
    }
}

const book = new Book("1984", "George Orwell", 19.99);
console.log(ReportGenerator.getDetailedReport(book));
Discount.applyDiscount(book, 10);
console.log(ReportGenerator.getDetailedReport(book));
