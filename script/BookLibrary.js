//exercise for book track record

const library = {
    books: [
        new Book("The Hobbit", "J.R.R. Tolkien", false),
        new Book("Harry Potter", "J.K Rowling", true),
        new Book("Matilda", "Roald Dahl", false),
        new Book("Winnie-the-Pooh", "A. A. Milne ", false),
        new Book("The Neverending Story", "Michael Ende", true),
        new Book("The Witches", "Roald Dahl", false),
        new Book("The Secret Garden", "Frances Hodgson", true)
    ],
    
    /* bookTest : [
         { title:"MyBook", author:"1", isRead: false},
         { title:"MyBook2", author:"2", isRead: false},
         { title:"MyBook3", author:"3", isRead: false},
         { title:"MyBook4", author:"4", isRead: false}
     ], */
    addBook(title, author) {
        const newBook = new Book(title, author);
        this.books.push(newBook);
        console.log( `Book title: ${newBook.title} and Book author: ${newBook.author}`);
    },
    listBooks() {
        this.books.forEach((item) => {
            console.log(
                 `Book title: ${item.title} and Book author: ${item.author} and read status : ${item.isRead ? "Read": "Unread"}`
            );
        });
    },
    markAsRead(title) {
        const book = this.books.find(item => item.title.toUpperCase() === title.toUpperCase());
        if (book) {
            book.isRead = true;
            this.confirmMessage(`Book with title: "${title}" marked as read.`);
        } else {
            this.error(`Book with title "${title}" not found in library.`);
        }
    },
    removeBook(title) {
        const book = this.books.find(item => item.title.toUpperCase() === title.toUpperCase())
        if (book) {
            this.books = this.books.filter(item => item.title !== title);
            library.confirmMessage(`Book with title "${title}" removed from the library.`);
        }
        else {
            this.error(`Book with title "${title}" not found in library.`);
        }
    },
    listUnreadBooks() {
        const unread = this.books.filter(book => !book.isRead);
        if (unread.length === 0) {
            this.confirmMessage("No book is available to read!");
        } else {
            unread.forEach(book => {
                console.log(`Unread -> Title: ${book.title}, Author: ${book.author}`);
            });
        }

    },
    confirmMessage(message) {
        console.log(`Action successful ->: ${message}`);
    },
    error(message) {
        console.log(`Action was not succesful because of ->: ${message}`);
    }
}

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function bookTracker() {
    let active = true;
    while (active) {
        const userChoice = prompt(`
       Welcome User here is Book Tracker Records-
            1.) Add Book
            2.) List Books
            3.) Mark Book as Read
            4.) Remove a book.
            5.) List unread books.
            6.) Exit
            Enter your choice`);

        if (userChoice === null) break;

        switch (userChoice.trim()) {
            case "1":
                const titleInput = prompt("Enter the title of the book which you want to add");
                const authorName = prompt("Enter the author name of the book which you want to add");
                library.confirmMessage("New book is added");
                library.addBook(titleInput, authorName);
                break;
            case "2":
                library.listBooks();
                break;
            case "3":
                const title = prompt("Enter the title of the book to mark as read");
                library.markAsRead(title);
                break;
            case "4":
                const bookTitle = prompt("Enter the title of book which you want to remove");
                library.removeBook(bookTitle);
                break;
            case "5":
                library.listUnreadBooks();
                break;
            case "6":
                active = false;
                alert("Goodbye!")
                break;
            default:
                alert("Invalid choice, please select 1–6.");
                break;
        }
    }

};

bookTracker();