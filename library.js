class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`Book "${this.title}" has been issued.`);
        } else {
            console.log(`Book "${this.title}" is already issued.`);
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`Book "${this.title}" has been returned.`);
        } else {
            console.log(`Book "${this.title}" was not issued.`);
        }
    }
}

let library = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Clean Code", "Robert C. Martin", "ISBN002"),
    new Book("JavaScript: The Good Parts", "Douglas Crockford", "ISBN003"),
    new Book("Atomic Habits", "James Clear", "ISBN004")
];

function showAvailableBooks() {
    console.log("\nAvailable Books:");
    library.forEach(book => {
        if (!book.isIssued) {
            console.log(`Book- ${book.title} by ${book.author} [${book.ISBN}]`);
        }
    });
}

function issueBookByISBN(isbn) {
    let book = library.find(b => b.ISBN === isbn);
    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found in library.");
    }
}
showAvailableBooks();
issueBookByISBN("ISBN002");
showAvailableBooks();
library[1].returnBook();
showAvailableBooks();         