"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const router = express_1.default.Router();
router.get('/books', (req, res) => {
    const books = (0, bookController_1.getBooks)();
    res.json(books);
});
router.post('/books', (req, res) => {
    const newBook = req.body;
    if (!newBook.id || !newBook.title) {
        return res.status(400).json({ error: "Missing id or title in request body" });
    }
    (0, bookController_1.addBook)(newBook);
    res.status(201).json({ message: "Book added successfully", book: newBook });
});
router.delete('/books/:id', (req, res) => {
    const id = +req.params.id;
    const deleted = (0, bookController_1.deleteBook)(id);
    if (deleted) {
        res.json({ message: `Book with id ${id} deleted successfully` });
    }
    else {
        res.status(404).json({ error: `Book with id ${id} not found` });
    }
});
exports.default = router;
