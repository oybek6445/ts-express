import express, { Request, Response } from 'express';
import { getBooks, addBook, deleteBook } from '../controllers/bookController';
import { Book } from '../types/Book';

const router = express.Router();

router.get('/books', (req: Request, res: Response) => {
    const books = getBooks();
    res.json(books);
});

router.post('/books', (req: Request, res: Response) => {
    const newBook = req.body as Book;
    if (!newBook.id || !newBook.title) {
        return res.status(400).json({ error: "Missing id or title in request body" });
    }
    addBook(newBook);
    res.status(201).json({ message: "Book added successfully", book: newBook });
});

router.delete('/books/:id', (req: Request, res: Response) => {
    const id = +req.params.id;
    const deleted = deleteBook(id);
    if (deleted) {
        res.json({ message: `Book with id ${id} deleted successfully` });
    } else {
        res.status(404).json({ error: `Book with id ${id} not found` });
    }
});

export default router;
