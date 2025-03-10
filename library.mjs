import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

export const books = [
    { name: "The Paper Menagerie", author: "Ken Liu", available: true },
    { name: "1984", author: "George Orwell", available: true },
    { name: "Chronicles of Narnia", author: "C.S. Lewis", available: true },
    { name: "The Art of Vogue", author: "William Packer", available: true },
    { name: "20th Century Boys", author: "Naoki Urasawa", available: true },
    { name: "You Don't Know JS", author: "Kyle Simpson", available: true },
    { name: "The Artist's Way", author: "Julia Cameron", available: true },
    { name: "Kafka on the Shore", author: "Haruki Murakami", available: true },
    { name: "Harry Potter", author: "J.K. Rowling", available: true },
    { name: "Monster", author: "Naoki Urasawa", available: true },
    { name: "Ender's Game", author: "Orson Scott Card", available: true },
];


const library = {
    books,

    viewBooksFromLibrary() {
        console.log("\nAvailable Books:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.name} by ${book.author} ${book.available ? "(Available)" : "(Borrowed)"}`);
        });
    },

    borrowBookFromLibrary(index) {
        if (this.books[index] && this.books[index].available) {
            this.books[index].available = false;
            console.log(`\nYou have borrowed "${this.books[index].name}".`);
        } 
        else {
            console.log(`\nThis book has already been borrowed or does not exist.`);
        }
    },

    returnBookToLibrary(index) {
        if (this.books[index] && !this.books[index].available) {
            this.books[index].available = true;
            console.log(`\nYou have returned "${this.books[index].name}".`);
        }
        else {
            console.log(`\nThe book "${this.books[index]?.name || 'Unknown'}" has not been borrowed.`);
        }
    },

    async allowUserViewMenu() {
        while (true) {
            console.log(`\nLibrary Menu:`);
            console.log("1. View Books");
            console.log("2. Borrow a Book");
            console.log("3. Return a Book");
            console.log("4. Exit");

            const choice = await rl.question("\nWhat would you like to do?\n");

            switch (choice) {
                case "1":
                    this.viewBooksFromLibrary();
                    break;
                case "2":
                    const borrowIndex = await rl.question(`\nEnter the book number to borrow: `);
                    this.borrowBookFromLibrary(Number(borrowIndex) - 1);
                    break;
                case "3":
                    const returnIndex = await rl.question(`\nEnter the book number to return: `);
                    this.returnBookToLibrary(Number(returnIndex) - 1);
                    break;
                case "4":
                    console.log(`\nGoodbye!`);
                    rl.close();
                    return;
                default:
                    console.log(`\nInvalid choice. Please try again.`);
            }
        }
    }
};

console.log(`\nHello! Welcome to the Library! You can select an option to interact with the interface.`);
library.allowUserViewMenu();
