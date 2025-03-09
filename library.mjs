// users can borrow books
// users can return books
// users can see a list of books
// once a book is borrowed, it becomes unavailable to return

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const books = [
    {
        name: "The Paper Menagerie",
        author: "Ken Liu",
        available: true
    },
    {
        name: "1984",
        author: "George Orwell",
        available: true
    },
    {
        name: "Chronicles of Narnia",
        author: "Ken Liu",
        available: true
    },
    {
        name: "The Art of Vogue",
        author: "William Packer",
        available: true
    },
    {
        name: "20th Century Boys",
        author: "Naoki Urasawa",
        available: true
    },
    {
        name: "You Don't Know JS",
        author: "Kyle Simpson",
        available: true
    },
    {
        name: "The Artist's Way",
        author: "Julia Cameron",
        available: true
    },
    {
        name: "Kafka on the Shore",
        author: "Haruki Murakami",
        available: true
    },
    {
        name: "Harry Potter",
        author: "J.K. Rowling",
        available: true
    },
    {
        name: "Monstura",
        author: "Naoki Urasawa",
        available: true
    },
    {
        name: "Ender's Game",
        author: "Orson Scott Card",
        available: true
    },
]

const library = {
    books
}
function viewBooksFromLibrary() {
    console.log("\n Available Books:");
    for (let i = 0; i < this.books.length + 1; i++) {
        console.log(` 
            ${books[i].title} 
            by ${books[i].available ? 
            "(Available)" : "(Borrowed)"}
            `)
    }
}

function borrowBookFromLibrary(index) {
    if (this.books[index] && this.books[index].available) {
        this.books[index].available = false;
        console.log(`\n You have borrowed "${this.books[index].name}"`);
        return;
    }
    console.log(`\n Book already borrowed.`)
}


function returnBookToLibrary(index) {
    if (this.books[index] && !this.books[index].available) {
        this.books[index].available = true;
        console.log(`\n You have returned "${this.books[index].name}`);
        return;
    }
    console.log(`\n The book, "${this.books[index].name}" has not been borrowed.`)
}

function allowUserViewMenu() {
    console.log(`\n Library Menu:`)
    console.log("1. View Books");
    console.log("2. Borrow a Book");
    console.log("3. Return a Book");
    console.log("4. Exit");

    rl.question("\nWhat would you like to execute?\n", (choice) => {
        switch(choice) {
            case 1:
                library.viewBooksFromLibrary();
                allowUserViewMenu();
                break;
            case 2:
                r1.question(`\nEnter the book number to borrow: `, (num => {
                    library.borrowBookFromLibrary(Number(num));
                    allowUserViewMenu();
                }));
                break;
            case 3:
                r1.question(`\nEnter book number to return: `, (num) => {
                    library.returnBookToLibrary(Number(num));
                    allowUserViewMenu();
                });
                break;
            case 4:
                console.log(`\n Goodbye!`);
                r1.close();
                break;
            default:
                console.log(`\n Try again.`);
                allowUserViewMenu();
                break;
        }
    })
}

console.log(`\n Hello! Welcome to the Library! You can select an option to interact with the interface.`)
allowUserViewMenu();