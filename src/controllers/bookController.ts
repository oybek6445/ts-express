import { Book } from '../types/Book';

let books: Book[] = [];

export const getBooks = (): Book[] => {
    return books;
};

export const addBook = (book: Book): void => {
    books.push(book);
};

export const deleteBook = (id: any): boolean => {
    const index = books.findIndex(item => item.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
};
